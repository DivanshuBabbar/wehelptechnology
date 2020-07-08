

<?php
//ini_set('disable_functions', '');
$to = "yogeshnawhal@gmail.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: yogeshnawhal@gmail.com";

if(mail($to,$subject,$txt,$headers)){
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}
echo("Hello");
// Show all information, defaults to INFO_ALL
//phpinfo();

// Show just the module information.
// phpinfo(8) yields identical results.
//phpinfo(INFO_MODULES);

?>
