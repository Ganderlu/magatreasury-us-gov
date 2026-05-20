# Official Backend & Order System

A production-ready Node.js + Express backend with Firebase Firestore integration for managing orders.

## Project Structure
```
- package.json
- server.js
- firebase-service-account.json (placeholder)
- public/
  - order-form.html
  - orders.html
  - css/
    - styles.css
```

## Setup Instructions

### 1. Firebase Configuration
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Go to **Project Settings** > **Service Accounts**.
4. Click **Generate New Private Key**.
5. Save the downloaded JSON file as `firebase-service-account.json` in the root directory.

### 2. Environment Variables
Create a `.env` file in the root (see `.env.example` if available):
```env
GOOGLE_APPLICATION_CREDENTIALS=./firebase-service-account.json
ALLOWED_ORIGIN=http://localhost:3000
PORT=3000
```

### 3. Installation
```bash
npm install
```

### 4. Running the App
- **Development**: `npm run dev`
- **Production**: `npm start`

## API Documentation

### POST /api/orders
Submit a new order.
- **Payload**:
  ```json
  {
    "email": "user@example.com",
    "deliveryDate": "2026-12-31",
    "countryRegion": "USA",
    "firstName": "John",
    "lastName": "Doe",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "phone": "555-0199"
  }
  ```
- **Example**:
  ```bash
  curl -X POST http://localhost:3000/api/orders \
    -H "Content-Type: application/json" \
    -d '{"email":"test@test.com","deliveryDate":"2026-05-20","countryRegion":"US","firstName":"John","lastName":"Doe","address":"123 St","city":"NYC","state":"NY","zipCode":"10001","phone":"1234567890"}'
  ```

### GET /api/orders
Retrieve orders. Supports `limit`, `pageToken`, and `sort`.
- **Example**:
  ```bash
  curl http://localhost:3000/api/orders?limit=10
  ```

## Security & Best Practices
- **Rate Limiting**: Currently logged as a suggestion in `server.js`. Recommended to use `express-rate-limit`.
- **Firestore Indexing**: If you filter by `createdAt` and another field simultaneously, Firestore may require an index. Follow the link provided in the server console error if this occurs.
- **Secrets**: Never commit `firebase-service-account.json` or `.env` to version control.

## Changelog
- `fix`: Restrict CORS to `ALLOWED_ORIGIN` env var for security.
- `fix`: Serve static files from `public/` only, preventing exposure of root files.
- `fix`: Replace deprecated `body-parser` with `express.json({ limit: '10kb' })`.
- `fix`: Integrate `helmet()` for secure HTTP headers.
- `fix`: Implement `express-validator` for strict server-side schema validation.
- `fix`: Add graceful shutdown handlers for `SIGTERM` and `SIGINT`.
- `fix`: Automate port failover if default port 3000 is occupied.
- `fix`: Convert Firestore timestamps to ISO strings for client compatibility.

## Acceptance Criteria Checklist
- [x] POST stores validated order and returns `201` with doc id.
- [x] GET returns orders sorted by `createdAt` desc and supports pagination.
- [x] Client form successfully posts and shows success message.
- [x] Orders page displays stored orders and formats dates.
- [x] No secrets in client files; `firebase-service-account.json` is placeholder.
- [x] CORS and Helmet configured; body size limited.
- [x] Port conflict handled gracefully.
