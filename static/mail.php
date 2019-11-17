<?php

$name = $_POST['name'];
$email = $_POST['email'];
$pohne = $_POST['phone'];
$message = $_POST['message'];
$formcontent="Сообщение с сайта SPCon\n\nИмя: $name \n\nПочта: $email \n\nТелефон: $phone \nСообщение: $message";
$recipient = "san4es-ag@yandex.ru";
// $recipient = "spcon@bk.ru";
$subject = "SPCon – Сообщение с сайта";

if(isset($name) and isset($email)) {
    mail($recipient, $subject, $formcontent);
}

?>
