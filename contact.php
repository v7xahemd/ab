<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comment = $_POST["comment"];

    // Replace YOUR_EMAIL_ADDRESS with your actual email address
    $to = "v7x.ahmed@yahoo.com";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $message = "Name: $name\n\n";
    $message .= "Email: $email\n\n";
    $message .= "Subject: $subject\n\n";
    $message .= "Message:\n$comment";

    if (mail($to, $subject, $message, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
?>
