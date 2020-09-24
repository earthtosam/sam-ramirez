<?php
    if(isset($_POST['submit'])){
        $name=$_POST['name'];
        $email=$_POST['email'];
        $phone=$_POST['phone'];
        $msg=$_POST['msg'];

        $mailTo='samuel_ramirez_07@yahoo.com';
        $subject='Sam Ramirez Portfolio Form Submission';
        $message="Name: ".$name."\n"."Phone: ".$phone."\n"."Wrote the following: "."\n\n".$msg;
        $headers="From: worldlycomet@hotmail.com";

        if(mail($mailTo, $subject, $message, $headers)){
            header('Location: message-sent.html');
        }
        else{
            header('Location: message-error.html');
        }
    }
?>
