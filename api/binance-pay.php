<?php
/**
 * Binance Pay Integration Backend
 * 
 * This script handles:
 * 1. Creating a Binance Pay order and returning the checkout URL
 * 2. Receiving webhooks from Binance Pay for payment confirmation
 */

header('Content-Type: application/json');

// --- CONFIGURATION ---
// Replace with your actual Binance Pay credentials
$BINANCE_API_KEY = 'YOUR_BINANCE_API_KEY';
$BINANCE_SECRET_KEY = 'YOUR_BINANCE_SECRET_KEY';

// --- ROUTING ---
$action = $_GET['action'] ?? 'create';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'create') {
    handleCreateBinanceOrder($BINANCE_API_KEY, $BINANCE_SECRET_KEY);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'webhook') {
    handleBinanceWebhook($BINANCE_SECRET_KEY);
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
}

/**
 * Creates a Binance Pay order and returns the checkout URL
 */
function handleCreateBinanceOrder($apiKey, $secretKey) {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!$input || !isset($input['amount'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid order data']);
        return;
    }

    $nonce = binance_generate_nonce();
    $timestamp = round(microtime(true) * 1000);
    
    $payload = [
        'env' => [
            'terminalType' => 'WEB'
        ],
        'orderAmount' => (float)$input['amount'],
        'orderCurrency' => $input['currency'] ?? 'USD',
        'merchantTradeNo' => (string)$input['order_id'],
        'goods' => [
            'goodsType' => '01',
            'goodsCategory' => '0000',
            'referenceGoodsId' => 'order_' . $input['order_id'],
            'goodsName' => 'Our Maga Shop Order',
        ],
        'returnUrl' => 'https://' . $_SERVER['HTTP_HOST'] . '/checkout.html?status=success',
        'cancelUrl' => 'https://' . $_SERVER['HTTP_HOST'] . '/checkout.html?status=cancel',
    ];

    $json_payload = json_encode($payload);
    $payload_to_sign = $timestamp . "\n" . $nonce . "\n" . $json_payload . "\n";
    $signature = strtoupper(hash_hmac('sha512', $payload_to_sign, $secretKey));

    $ch = curl_init('https://bpay.binanceapi.com/binancepay/openapi/v2/order');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'content-type: application/json',
        'binancepay-certificate-sn: ' . $apiKey, // Note: Use SN if applicable, else API Key
        'binancepay-signature: ' . $signature,
        'binancepay-nonce: ' . $nonce,
        'binancepay-timestamp: ' . $timestamp
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $result = json_decode($response, true);

    if ($httpCode === 200 && isset($result['status']) && $result['status'] === 'SUCCESS') {
        echo json_encode([
            'success' => true, 
            'url' => $result['data']['checkoutUrl']
        ]);
    } else {
        http_response_code(400);
        echo json_encode([
            'success' => false, 
            'message' => $result['errorMessage'] ?? 'Failed to create Binance Pay order',
            'details' => $result
        ]);
    }
}

/**
 * Handles Binance Pay Webhook
 */
function handleBinanceWebhook($secretKey) {
    $headers = getallheaders();
    $timestamp = $headers['Binancepay-Timestamp'] ?? '';
    $nonce = $headers['Binancepay-Nonce'] ?? '';
    $signature = $headers['Binancepay-Signature'] ?? '';
    $body = file_get_contents('php://input');

    if (!$body || !$signature) return;

    $payload_to_verify = $timestamp . "\n" . $nonce . "\n" . $body . "\n";
    $computed_signature = strtoupper(hash_hmac('sha512', $payload_to_verify, $secretKey));

    if (hash_equals($signature, $computed_signature)) {
        $data = json_decode($body, true);
        if ($data && isset($data['bizStatus']) && $data['bizStatus'] === 'PAY_SUCCESS') {
            $orderId = $data['data']['merchantTradeNo'];
            // TODO: Update your database here
            error_log("Binance Pay: Order $orderId confirmed.");
        }
        http_response_code(200);
        echo json_encode(['returnCode' => 'SUCCESS', 'returnMsg' => null]);
    } else {
        http_response_code(400);
        echo "Invalid Signature";
    }
}

function binance_generate_nonce($length = 32) {
    $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $nonce = '';
    for ($i = 0; $i < $length; $i++) {
        $nonce .= $chars[mt_rand(0, strlen($chars) - 1)];
    }
    return $nonce;
}
