<?php

var_dump('votre mail est en cours d envoi');



   	 $to      = 'p.brickley@hotmail.fr';
     $subject = 'Message depuis le Portfolio';
     $message = $_POST['message'];
     $headers = 'From:'. $_POST['mailbox'] .
     'which name is' . $_POST['namebox'] .
     'X-Mailer: PHP/' . phpversion();

     mail($to, $subject, $message);

header('Refresh: 2; index.html');
exit;

?>
