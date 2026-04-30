<?php
/**
 * Heleket Payment Integration Backend
 * 
 * This script handles:
 * 1. Creating a Heleket invoice when the user clicks "Complete Purchase"
 * 2. Receiving webhooks from Heleket to verify and update orders
 */

header('Content-Type: application/json');

// --- CONFIGURATION ---
// Replace these with your actual Heleket credentials
$HELEKET_API_KEY = 'YOUR_HELEKET_API_KEY';
$HELEKET_SECRET = 'YOUR_HELEKET_SECRET'; // For webhook verification

// --- ROUTING ---
$action = $_GET['action'] ?? 'create';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'create') {
    handleCreateHeleketInvoice($HELEKET_API_KEY);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'webhook') {
    handleHeleketWebhook($HELEKET_SECRET);
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
}

/**
 * Creates a Heleket invoice and returns the payment URL
 */
function handleCreateHeleketInvoice($apiKey) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['amount'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid order data']);
        return;
    }

    // Prepare Heleket payload
    // Note: The specific field names may vary based on Heleket's actual API documentation
    $payload = [
        'amount' => $input['amount'],
        'currency' => $input['currency'] ?? 'USD',
        'order_id' => $input['order_id'],
        'success_url' => 'https://' . $_SERVER['HTTP_HOST'] . '/checkout.html?status=success',
        'cancel_url' => 'https://' . $_SERVER['HTTP_HOST'] . '/checkout.html?status=cancel',
        'callback_url' => 'https://' . $_SERVER['HTTP_HOST'] . '/api/heleket.php?action=webhook',
        'customer_email' => $input['email'] ?? '',
    ];

    // Call Heleket API
    $ch = curl_init('https://api.heleket.com/v1/invoices'); // Placeholder URL
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Heleket Gateway Error: ' . $error]);
    } else {
        $result = json_decode($response, true);
        // Assuming Heleket returns the URL in $result['data']['payment_url']
        if ($httpCode === 200 || $httpCode === 201) {
            echo json_encode([
                'success' => true, 
                'url' => $result['payment_url'] ?? $result['data']['payment_url'] ?? ''
            ]);
        } else {
            http_response_code($httpCode);
            echo json_encode([
                'success' => false, 
                'message' => $result['message'] ?? 'Failed to create Heleket invoice',
                'details' => $result
            ]);
        }
    }
}

/**
 * Handles Heleket Webhook for payment verification
 */
function handleHeleketWebhook($secret) {
    $data = json_decode(file_get_contents('php://input'), true);
    $signature = $_SERVER['HTTP_X_HELEKET_SIGNATURE'] ?? ''; // Example header

    if (!$data) {
        return;
    }

    // ARCHITECTURE STEP: Verify Heleket Webhook
    // This is a placeholder for actual verification logic
    $isValid = false;
    if ($signature) {
        $computed = hash_hmac('sha256', file_get_contents('php://input'), $secret);
        $isValid = hash_equals($signature, $computed);
    } else {
        // If no signature header, you might check a field in the body or skip if secret is empty (not recommended)
        $isValid = true; 
    }

    if ($isValid) {
        $status = $data['status'] ?? '';
        $orderId = $data['order_id'] ?? '';

        // ARCHITECTURE STEP: Mark order as paid
        if ($status === 'completed' || $status === 'paid') {
            // TODO: Update your database
            // Example: $db->query("UPDATE orders SET status='paid' WHERE id='$orderId'");
            error_log("Order $orderId paid successfully via Heleket.");
        }
        
        http_response_code(200);
        echo "OK";
    } else {
        http_response_code(400);
        echo "Invalid Signature";
    }
}
