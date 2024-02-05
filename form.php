<?php

$nombre = $_POST['name'];
$mail = $_POST['mail'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$mensaje = "Nombre : " . $nombre . "\r\n";
$mensaje = "Mail : " . $mail . " \r\n";
$mensaje = "Asunto : " . $asunto . "\r\n";
$mensaje = "Mensaje : " . $_POST['mensaje'] . "\r\n";
$mensaje = "Enviado el : " . date('d/m/Y', time());

$para = 'leo.cuenca.hw@gmail.com';
$asunto = 'Este mail fue enviado desde mi web personal';

mail($para, $asunto, utf8_decode($mensaje), $header);

header('location:exito.html');
