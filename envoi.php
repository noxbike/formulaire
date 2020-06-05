<?php

$nom = $_POST['nom'];
$email = $_POST['email'];
$message = $_POST['message'];

if(isset($nom) && isset($email) && isset($message))
{
    echo 'message envoyer';
}
?>