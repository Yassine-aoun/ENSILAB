<?php
  session_start();
  try
  {
  	$bdd = new PDO('mysql:host=localhost;dbname=labo;charset=utf8', 'root', '');
  }
  catch (Exception $e)
  {
    die('Erreur : ' . "Connection echoué");
  }
  $email=$_GET['email'];
  $pwd = $_GET['pwd'];

  $requete = $bdd->prepare('SELECT * FROM users WHERE email=?');
  $requete->execute(array($email));
  if ( $donnees = $requete->fetch()){
    if ($donnees['pwd']==$pwd){
      $_SESSION['email'] = $email;
      $_SESSION['pwd'] = $pwd;
      $_SESSION['nom'] = $donnees['nom'];
      $_SESSION['prenom'] = $donnees['prenom'];
      echo "Connecté";
    }
    else{
      echo "Mot de passe incorrect. ";
    }
  }
  else{
    echo "Aucun compte est associé à cet e-mail. Créez-en un!";
  }
?>
