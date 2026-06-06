<?php
/**
 * Wise Technologies Contact Form Handler
 * Place this file in your Hostinger public_html directory
 * Configure SMTP settings below with your Hostinger email credentials
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
    exit;
}

$name = isset($input['name']) ? htmlspecialchars(trim($input['name']), ENT_QUOTES, 'UTF-8') : '';
$email = isset($input['email']) ? filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL) : '';
$message = isset($input['message']) ? htmlspecialchars(trim($input['message']), ENT_QUOTES, 'UTF-8') : '';

// Validation
$errors = [];
if (empty($name)) $errors[] = 'Name is required';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Valid email is required';
if (empty($message)) $errors[] = 'Message is required';
if (strlen($message) > 5000) $errors[] = 'Message is too long (max 5000 characters)';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Honeypot check (hidden field)
if (!empty($input['website'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Spam detected']);
    exit;
}

// Rate limiting - simple IP-based (stores in temp file)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/wise_contact_' . md5($ip) . '.txt';
$now = time();
if (file_exists($rateFile)) {
    $lastSubmit = (int)file_get_contents($rateFile);
    if ($now - $lastSubmit < 60) {
        http_response_code(429);
        echo json_encode(['success' => false, 'error' => 'Please wait a minute before sending another message']);
        exit;
    }
}
file_put_contents($rateFile, (string)$now);

// ===================== HOSTINGER SMTP CONFIGURATION =====================
// Replace these with your Hostinger email credentials:
// 1. Create an email account in Hostinger hPanel (e.g., contact@wisetechryk.com)
// 2. Use these SMTP settings:
//    - SMTP Host: smtp.hostinger.com
//    - SMTP Port: 465 (SSL) or 587 (TLS)
//    - Username: your full email address
//    - Password: your email password
// =========================================================================

$to = 'contact@wisetechryk.com'; // CHANGE THIS to your Hostinger email
$subject = 'New Contact Form Message from ' . $name;
$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Message:\n$message\n";
$body .= "\n---\nSent from: " . ($_SERVER['HTTP_REFERER'] ?? 'Unknown') . "\n";
$body .= "IP: $ip\n";
$body .= "Time: " . date('Y-m-d H:i:s') . "\n";

$headers = "From: $to\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Try mail() first (works on many Hostinger plans)
$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully!']);
} else {
    // If mail() fails, you can implement PHPMailer with SMTP here
    // See: https://github.com/PHPMailer/PHPMailer
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to send message. Please try again later.']);
}
