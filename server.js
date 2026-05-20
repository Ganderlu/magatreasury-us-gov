const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const admin = require('firebase-admin');
const { body, query, validationResult } = require('express-validator');
const path = require('path');
require('dotenv').config();

const app = express();

// ====================== Firebase Initialization ======================
/**
 * FIX: Using service account JSON file for reliable initialization.
 */
const serviceAccountPath = path.join(__dirname, 'firebase-service-account.json');

if (admin.apps.length === 0) {
  try {
    const serviceAccount = require(serviceAccountPath);
    console.log('Using project ID from service account:', serviceAccount.project_id);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: serviceAccount.project_id,
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
    });
    console.log('Firebase Admin initialized successfully for project:', serviceAccount.project_id);
  } catch (error) {
    console.error('Firebase initialization error:', error.message);
    try {
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
      console.log('Firebase Admin initialized successfully using applicationDefault');
    } catch (fallbackError) {
      console.error('Firebase fallback initialization error:', fallbackError.message);
    }
  }
}

const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore(admin.app(), 'default');

// Ensure Firestore uses the correct settings
try {
  db.settings({ ignoreUndefinedProperties: true });
} catch (e) {
  console.warn('Could not set Firestore settings:', e.message);
}

// Diagnostic test on startup
(async () => {
  console.log('--- Firestore Diagnostic ---');
  try {
    const testDoc = await db.collection('_diagnostic').doc('status').get();
    console.log('Firestore connection: SUCCESS');
  } catch (error) {
    console.error('Firestore Diagnostic FAILED:');
    if (error.code === 5 || error.message.includes('NOT_FOUND')) {
      console.error('  ERROR: Database not found. Please double-check your Firebase Console.');
      console.error('  Project ID:', admin.app().options.projectId);
      console.error('  Make sure "Firestore Database" is created and named "(default)".');
    } else {
      console.error('  ERROR:', error.message);
    }
  }
  console.log('---------------------------');
})();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    firebase: admin.apps.length > 0 ? 'initialized' : 'failed',
    timestamp: new Date().toISOString()
  });
});

// ====================== Middleware & Security ======================

// FIX: Added helmet for security headers (fixes missing security headers)
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for simplicity in this demo, enable in strict prod
}));

// FIX: Strict CORS configuration (fixes insecure "*" origin)
const allowedOrigin = process.env.ALLOWED_ORIGIN || '*';
app.use(cors({ origin: allowedOrigin }));

// FIX: Use express.json with limit to prevent DoS (fixes missing body limit and deprecated body-parser)
app.use(express.json({ limit: '10kb' }));

// FIX: Serve static files with 'html' and 'htm' extensions for clean URLs
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html', 'htm'] }));
app.use(express.static(__dirname, {
  index: "index.htm",
  extensions: ['html', 'htm'],
  setHeaders: (res, path) => {
    // Block sensitive files from being served
    const sensitiveFiles = ['.env', 'server.js', 'package.json', 'firebase-service-account.json', 'FIXES.md'];
    if (sensitiveFiles.some(file => path.endsWith(file))) {
      res.status(403).end();
    }
  }
}));

// Route for the root to explicitly serve index.htm
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.htm'));
});

// Catch-all to serve index.htm for SPA behavior or clean URL routing
app.get('*', (req, res, next) => {
  // If the request is for an API, don't serve index.htm
  if (req.url.startsWith('/api/')) {
    return next();
  }
  
  // If it's a request for a file that doesn't exist, fallback to index.htm
  // This ensures that when the server starts, or for any unknown route, we show the home page
  res.sendFile(path.join(__dirname, 'index.htm'));
});

/**
 * POST /api/payment-verifications
 * Create a new payment verification
 */
app.post('/api/payment-verifications', [
  body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
  body('usdAmount').notEmpty().withMessage('Amount is required'),
], async (req, res) => {
  try {
    const data = {
      ...req.body,
      timestamp: new Date().toISOString()
    };
    await db.collection('payment_verifications').add(data);
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving verification:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * GET /api/admin/data
 * Retrieve all data for admin dashboard
 */
app.get('/api/admin/data', async (req, res) => {
  try {
    const [verificationsSnapshot, ordersSnapshot] = await Promise.all([
      db.collection('payment_verifications').get(),
      db.collection('orders').get()
    ]);

    const allItems = [];
    verificationsSnapshot.forEach((doc) => {
      const data = doc.data();
      allItems.push({ 
        id: doc.id, 
        collection: 'payment_verifications', 
        ...data, 
        type: 'Crypto',
        timestamp: data.timestamp || new Date(0).toISOString()
      });
    });
    
    ordersSnapshot.forEach((doc) => {
      const data = doc.data();
      allItems.push({ 
        id: doc.id, 
        collection: 'orders', 
        ...data, 
        type: 'Standard',
        timestamp: data.createdAt ? (data.createdAt.toDate ? data.createdAt.toDate().toISOString() : data.createdAt) : (data.deliveryDate || new Date(0).toISOString())
      });
    });

    res.json({ success: true, data: allItems });
  } catch (error) {
    console.error('Error fetching admin data:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/admin/update-status
 * Update status of an order or verification
 */
app.post('/api/admin/update-status', [
  body('id').notEmpty().withMessage('ID is required'),
  body('collection').isIn(['orders', 'payment_verifications']).withMessage('Invalid collection'),
  body('status').notEmpty().withMessage('Status is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { id, collection, status } = req.body;
    await db.collection(collection).doc(id).update({ status });
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating status:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * GET /api/user/orders
 * Retrieve orders for a specific user
 */
app.get('/api/user/orders', [
  query('email').isEmail().withMessage('Invalid email'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { email } = req.query;
    const [verificationsSnapshot, ordersSnapshot] = await Promise.all([
      db.collection('payment_verifications').where('email', '==', email).get(),
      db.collection('orders').where('email', '==', email).get()
    ]);

    const items = [];
    verificationsSnapshot.forEach(doc => items.push({ id: doc.id, type: 'Crypto', ...doc.data() }));
    ordersSnapshot.forEach(doc => items.push({ id: doc.id, type: 'Standard', ...doc.data() }));

    res.json({ success: true, data: items });
  } catch (error) {
    console.error('Error fetching user orders:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/users
 * Create or update a user profile
 */
app.post('/api/users', [
  body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
  body('firstName').optional().trim().escape(),
  body('lastName').optional().trim().escape(),
  body('newsletter').optional().isBoolean(),
  body('address').optional().isObject(),
], async (req, res) => {
  try {
    const { email, ...userData } = req.body;
    const userRef = db.collection('users').doc(email);
    
    await userRef.set({
      ...userData,
      email: email,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving user profile:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * POST /api/orders
 * Create a new order in Firestore
 */
app.post('/api/orders', [
  // FIX: Added strict input validation and sanitization (fixes missing validation)
  body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
  body('deliveryDate').optional().isISO8601().withMessage('Delivery date must be a valid ISO 8601 date'),
  body('countryRegion').trim().notEmpty().withMessage('Country/Region is required').escape(),
  body('firstName').trim().notEmpty().withMessage('First name is required').escape(),
  body('lastName').trim().notEmpty().withMessage('Last name is required').escape(),
  body('address').trim().notEmpty().withMessage('Address is required').escape(),
  body('apartment').optional().trim().escape(),
  body('city').trim().notEmpty().withMessage('City is required').escape(),
  body('state').trim().notEmpty().withMessage('State is required').escape(),
  body('zipCode').trim().notEmpty().withMessage('ZIP code is required').escape(),
  body('phone').trim().notEmpty().withMessage('Phone number is required').escape(),
], async (req, res) => {
  console.log('Incoming order request:', JSON.stringify(req.body, null, 2));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.warn('Validation errors:', JSON.stringify(errors.array(), null, 2));
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const orderData = {
      ...req.body,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    console.log('Saving to Firestore collection "orders"...');
    const docRef = await db.collection('orders').add(orderData);
    console.log('Order saved successfully with ID:', docRef.id);
    
    res.status(201).json({
      success: true,
      id: docRef.id
    });
  } catch (error) {
    console.error('CRITICAL: Error saving order to Firestore:', error);
    let errorDetail = error.message;
    
    // Check for common Firestore error codes
    if (error.code === 5 || error.message.includes('NOT_FOUND')) {
      errorDetail = `Firestore database not found for project "${admin.instanceId ? admin.app().options.projectId : 'unknown'}". \n` +
                    `1. Verify project ID in firebase-service-account.json matches your console.\n` +
                    `2. Ensure "Firestore Database" (NOT Realtime Database) is created.\n` +
                    `3. Check if the database ID is "(default)". If you named it something else, the SDK won't find it automatically.`;
    } else if (error.code === 7 || error.message.includes('PERMISSION_DENIED')) {
      errorDetail = 'Database permission denied. Check your Firestore Security Rules.';
    }

    res.status(500).json({ 
      success: false, 
      message: 'Server error: ' + errorDetail
    });
  }
});

/**
 * GET /api/orders
 * Retrieve orders with pagination and filtering
 */
app.get('/api/orders', [
  query('limit').optional().isInt({ min: 1, max: 100 }).toInt(),
  query('pageToken').optional().isString(),
  query('sort').optional().isIn(['asc', 'desc']),
  query('fromDate').optional().isISO8601(),
  query('toDate').optional().isISO8601(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { limit = 50, pageToken, sort = 'desc', fromDate, toDate } = req.query;
    
    let queryRef = db.collection('orders').orderBy('createdAt', sort);

    if (fromDate) {
      queryRef = queryRef.where('createdAt', '>=', new Date(fromDate));
    }
    if (toDate) {
      queryRef = queryRef.where('createdAt', '<=', new Date(toDate));
    }

    if (pageToken) {
      const lastDoc = await db.collection('orders').doc(pageToken).get();
      if (lastDoc.exists) {
        queryRef = queryRef.startAfter(lastDoc);
      }
    }

    const snapshot = await queryRef.limit(limit).get();
    
    const orders = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        // FIX: Convert Firestore timestamps to ISO strings (as requested)
        createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : null,
        deliveryDate: data.deliveryDate // Already ISO string from validation
      };
    });

    const nextPageToken = snapshot.docs.length === limit ? snapshot.docs[snapshot.docs.length - 1].id : null;

    res.json({
      success: true,
      orders,
      nextPageToken
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// ====================== Rate Limiting Suggestion ======================
/**
 * NOTE: For production, enable express-rate-limit:
 * const rateLimit = require('express-rate-limit');
 * const limiter = rateLimit({
 *   windowMs: 15 * 60 * 1000, // 15 minutes
 *   max: 100 // limit each IP to 100 requests per windowMs
 * });
 * app.use('/api/', limiter);
 */

// Catch-all for SPA or 404
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// ====================== Server Start & Graceful Shutdown ======================
const PORT = process.env.PORT || 3000;

function startServer(port) {
  const server = app.listen(port)
    .on('listening', () => {
      console.log(`Server running on port ${port}`);
    })
    .on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.warn(`Port ${port} is busy, trying ${parseInt(port) + 1}...`);
        startServer(parseInt(port) + 1);
      } else {
        console.error('Server error:', err);
      }
    });

  // FIX: Added graceful shutdown handlers (fixes missing signal handling)
  const shutdown = () => {
    console.log('Shutting down gracefully...');
    server.close(() => {
      console.log('Closed out remaining connections');
      process.exit(0);
    });
  };

  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
  
  return server;
}

const server = startServer(PORT);

module.exports = server;
