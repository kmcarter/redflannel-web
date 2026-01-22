<?php

require_once __DIR__ . '/../PHPMailer/src/Exception.php';
require_once __DIR__ . '/../PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/../PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function verifyRecaptcha($token) {
    if (empty($token)) {
        error_log("Google RECAPTCHA token is empty");
        return false;
    }
    $api_key = getenv('GOOGLE_RECAPTCHA_API_KEY');
    $site_key = '6Lf4mIcrAAAAAFh3tTXPRlVdwwWTVYggGjQ6J_ar';
    $minimum_score = 0.7;

    $post_data = array(
      'event' => array(
          'siteKey' => $site_key,
          'token' => $token,
      )
    );

    $ch = curl_init('https://recaptchaenterprise.googleapis.com/v1/projects/rainworks-86/assessments?key=' . $api_key);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post_data)); // Send as JSON
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json'
    ));
    curl_setopt($ch, CURLOPT_POST, true);

    $response = curl_exec($ch);
    curl_close($ch);

    if (!$response) {
        error_log("Google RECAPTCHA could not be reached");
        return false;
    }

    $content = json_decode($response, true);
    if (key_exists('error', $content)) {
        error_log("Google RECAPTCHA returned an error: " . json_encode($response['error']));
        return false;
    } else if ($content['tokenProperties']['valid'] ?? false) {
        if (floatval($content['riskAnalysis']['score']) >= $minimum_score) {
            return true;
        } else {
            error_log("RECAPTCHA score of {$content['riskAnalysis']['score']} did not meet minimum of $minimum_score");
        }
    } else {
        error_log("Google RECAPTCHA returned a failure: " . json_encode($content['tokenProperties']['invalidReason']));
        error_log("Google Response: " . json_encode($content));
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

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = getenv("BREVO_SMTP_HOST");
        $mail->SMTPAuth = true;
        $mail->Username = getenv("BREVO_SMTP_USER");
        $mail->Password = getenv("BREVO_SMTP_KEY");
        $mail->SMTPSecure = 'tls'; // or 'ssl' if required
        $mail->Port = 587; // 465 for SSL, 587 for TLS

        $mail->setFrom('admin@redflannel.co', 'Red Flannel Admin');
        $mail->addAddress($to);
        $mail->addReplyTo($email);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $message;
        $mail->AltBody = strip_tags($message);

        $mail->send();
        http_response_code(200);
        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        http_response_code(500);
        error_log("Contact form submission failure: " . $mail->ErrorInfo);
        echo json_encode(['success' => false, 'message' => 'Failed to send email: ' . $mail->ErrorInfo]);
    }
}

contact();