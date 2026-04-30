<?php
/**
 * Cryptomus Payment Integration Backend
 * 
 * This script handles:
 * 1. Creating a Cryptomus invoice when the user clicks "Complete Purchase"
 * 2. Receiving webhooks from Cryptomus to verify and update orders
 */

header('Content-Type: application/json');

// --- CONFIGURATION ---
// Replace these with your actual Cryptomus credentials from the dashboard
$MERCHANT_ID = '7cc270bc-f0a1-437d-a0c2-9a8afe379492';
$API_KEY = 'YOUR_API_KEY';

// --- ROUTING ---
$action = $_GET['action'] ?? 'create';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'create') {
    handleCreateInvoice($MERCHANT_ID, $API_KEY);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'webhook') {
    handleWebhook($API_KEY);
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
}

/**
 * Creates a Cryptomus invoice and returns the payment URL
 */
function handleCreateInvoice($merchantId, $apiKey) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['amount'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid order data']);
        return;
    }

    // Prepare Cryptomus payload
    $payload = [
        'amount' => (string)$input['amount'],
        'currency' => $input['currency'] ?? 'USD',
        'order_id' => (string)$input['order_id'],
        'url_return' => 'https://' . $_SERVER['HTTP_HOST'] . '/checkout.html?status=success',
        'url_callback' => 'https://' . $_SERVER['HTTP_HOST'] . '/api/cryptomus.php?action=webhook',
        'is_payment_any' => true, // Allows user to choose any crypto on the hosted page
    ];

    // Generate Signature
    // Cryptomus signature: md5(base64_encode(json_encode($payload)) + $apiKey)
    $sign = md5(base64_encode(json_encode($payload, JSON_UNESCAPED_SLASHES)) . $apiKey);

    // Call Cryptomus API
    $ch = curl_init('https://api.cryptomus.com/v1/payment');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'merchant: ' . $merchantId,
        'sign: ' . $sign,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($error) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Payment Gateway Error: ' . $error]);
    } else {
        $result = json_decode($response, true);
        if ($httpCode === 200 && isset($result['result']['url'])) {
            echo json_encode([
                'success' => true, 
                'url' => $result['result']['url']
            ]);
        } else {
            http_response_code(400);
            echo json_encode([
                'success' => false, 
                'message' => $result['message'] ?? 'Failed to create Cryptomus invoice',
                'details' => $result
            ]);
        }
    }
}

/**
 * Handles Cryptomus Webhook for payment verification
 */
function handleWebhook($apiKey) {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!$data || !isset($data['sign'])) {
        return;
    }

    // Verify Webhook Signature
    $receivedSign = $data['sign'];
    unset($data['sign']);
    $computedSign = md5(base64_encode(json_encode($data, JSON_UNESCAPED_SLASHES)) . $apiKey);

    if (hash_equals($receivedSign, $computedSign)) {
        $status = $data['status'];
        $orderId = $data['order_id'];

        // ARCHITECTURE STEP: Verify + Update Order
        if ($status === 'paid' || $status === 'paid_over') {
            // TODO: Update your database here
            // Example: $db->query("UPDATE orders SET status='paid' WHERE id='$orderId'");
            
            error_log("Order $orderId paid successfully via Cryptomus.");
        }
        
        // Always respond with 200 to acknowledge receipt
        http_response_code(200);
        echo "OK";
    } else {
        http_response_code(400);
        echo "Invalid Signature";
    }
}
