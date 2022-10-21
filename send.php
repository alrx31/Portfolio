<?php
$name     = $_POST['name'];
$email    = $_POST['email'];
$message  = $_POST['message'];

$name     = htmlspecialchars($name);
$email    = htmlspecialchars($email);
$message  = htmlspecialchars($message);

$name     = urldecode($name);
$email    = urldecode($email);
$message  = urldecode($message);


$name     = trim($name);
$email    = trim($email);
$message  = trim($message);

mail("usov.lesha2017@gmail.com", "Заявка на дизайнера", "ФИО: ".$name.". E-mail: ".$email." Сообщение от клиента: ".$message ,"From: message@gmail.com \r\n");

?>