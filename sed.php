<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/src/Exception.php';
require 'vendor/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/src/SMTP.php';
require 'vendor/autoload.php';


$scrollToForm = false;

if (isset($_POST["send"])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = nl2br(htmlspecialchars($_POST['message']));

    $body = "
        <h3>Nom: $name</h3>
        <h3>Email: $email</h3>
        <h3>Sujet: $subject</h3>
        <p>Message:</p>
        <p>$message</p>
    ";

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'wiamaarika@gmail.com';
        $mail->Password = 'kvjd quop dzie uoik'; 
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        $mail->setFrom('wiamaarika@gmail.com', 'Formulaire Commande');
        $mail->addAddress('wiamaarika@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = 'Nouvelle commande client';
        $mail->Body = $body;

        $mail->send();
        echo "Message envoyé !";
    } catch (Exception $e) {
        echo "Message non envoyé. Erreur: {$mail->ErrorInfo}";
    }
}
?>
