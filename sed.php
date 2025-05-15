<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
if($_SERVER['REQUEST_METHOD'] == "POST"){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
      
    $mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';           // Gmail SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'wieamaarika@gmail.com';      // Your Gmail address
    $mail->Password   = 'your_app_password';        // App password, NOT Gmail password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('test@test.com', 'some');
    $mail->addAddress('wieamaarika@gmail.com', 'wiam ar');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Test Email with PHPMailer';
    $mail->Body    = "name:" . $name . "email" . $email."subject" . $subject . "message" . $message;
    $mail->AltBody = 'This is a plain-text version of the message.';

    $mail->send();
    echo 'Email has been sent successfully.';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}

?>