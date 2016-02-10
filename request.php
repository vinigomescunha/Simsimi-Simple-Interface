<?php
/*
Simple call to simsimi website
*/

/* constant url
Trial-key => daily limit 30days
http://sandbox.api.simsimi.com/request.p?key=
Paid-key => 
http://api.simsimi.com/request.p?key=
*/
define('url', "http://sandbox.api.simsimi.com/request.p?key="); 

/* constant key
trial or paid key */
define('key', 'd6cd6765-eac1-4f4b-ac5b-16f02747fe89'); 

/*Language Codes see http://developer.simsimi.com/lclist */
define('lc', 'pt'); 

/* get the message to send */
$text = isset($_GET['text']) && !empty($_GET['text']) ? urlencode($_GET['text']) : "";

$u = url . key . "&lc=" . lc . "&ft=1.0&text=" . $text;

/* get the content */
$d = file_get_contents($u);
echo $d;
