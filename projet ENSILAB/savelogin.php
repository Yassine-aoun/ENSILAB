<?php
  try
  {
    $bdd = new PDO('mysql:host=localhost;dbname=labo;charset=utf8', 'root', '');
  }
  catch (Exception $e)
  {
    die('Erreur : ' . "Connection echoué");
  }

  $requete = $bdd->prepare("INSERT INTO users (id, email, mdp, nom, prenom, status, der_con, super_user) VALUES (NULL, :email, :mdp, :nom, :prenom, '', '0', '0')");
  $requete->execute(array(
    'nom' => $_GET['nom'],
    'prenom' => $_GET['prenom'],
    'email' => $_GET['email'],
    'mdp' => $_GET['pwd']
  ));
  echo "Saved.";

?>
