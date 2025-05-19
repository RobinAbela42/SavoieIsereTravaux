<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail to Sylvain Abela with form</title>
</head>
<body>
    <?php
    $retour = mail('abelar@iut-acy.univ-smb.fr', 'Contact depuis le site pour : '. $_POST['workType'], 'Message', 'crescentlessmoon@gmail.com' );
    if ($retour) 
        echo '<p>Votre message à bien été envoyé.</p>';
    ?>
</body>
</html>