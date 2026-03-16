<?php

$to = "cdesembarki@gmail.com";

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$message = $_POST['message'];

$subject = "New contact form message";

$body = "Name: $firstName $lastName\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message";

$headers = "From: contact@yourdomain.com\r\n";
$headers .= "Reply-To: $email\r\n";

mail($to, $subject, $body, $headers);

header("Location: index.html?success=true");
exit();

?>