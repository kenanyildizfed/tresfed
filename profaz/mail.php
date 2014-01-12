<?php

function phpMail() {

if(! class_exists('PHPMailer'))
require 'smtp/class.phpmailer.php';

$mail = new PHPMailer;
$mail->CharSet = "UTF-8";
$mail->From = 'kenanyildiz90@gmail.com';
$mail->FromName = 'Form Yalnızca';
$mail->IsHTML(true);
return $mail;
}


ob_start();
include ('form.php');
$message = ob_get_contents();
ob_end_clean();


$mail->Body = $message;
$mail->Send();



?>