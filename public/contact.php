<?php

function verifyRecaptcha($token) {
    $secret = getenv('GOOGLE_RECAPTCHA_SECRET_KEY');
    $minimum_score = floatval(getenv('GOOGLE_RECAPTCHA_MINIMUM_SCORE'));

    $post_data = http_build_query([
        'secret' => $secret,
        'response' => $token
    ]);

    $ch = curl_init('https://www.google.com/recaptcha/api/siteverify');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
    curl_setopt($ch, CURLOPT_POST, true);

    $response = curl_exec($ch);
    curl_close($ch);

    if (!$response) {
        error_log("Google RECAPTCHA could not be reached");
        return false;
    }

    $content = json_decode($response, true);
    if ($content['success']) {
        if (floatval($content['score']) >= $minimum_score) {
            return true;
        } else {
            error_log("RECAPTCHA score of {$content['score']} did not meet minimum of $minimum_score");
        }
    } else {
        error_log("Google RECAPTCHA returned a failure: " . json_encode($content['error-codes']));
    }
    return false;
}

function contact() {
    header('Content-Type: application/json');

    $input = json_decode(file_get_contents('php://input'), true);

    if (!verifyRecaptcha($input['token'] ?? '')) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => "Google RECAPTCHA token could not be verified."]);
        return;
    }

    $name = htmlspecialchars($input['name'] ?? '');
    $email = htmlspecialchars($input['email'] ?? '');
    $projDesc = htmlspecialchars($input['projDesc'] ?? '');

    $to = 'kelly@redflannel.co';
    $subject = '[Red Flannel] contact submission';
    $message = "<html><body><dl>
        <dt>Name</dt><dd>{$name}</dd>
        <dt>Email</dt><dd>{$email}</dd>
        <dt>Project description</dt><dd>{$projDesc}</dd>
    </dl></body></html>";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Red Flannel Admin <admin@redflannel.co>\r\n";
    $headers .= "Reply-To: {$email}\r\n";

    // For real SMTP, use PHPMailer or similar. This uses PHP's mail().
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to send email.']);
    }
}

contact();