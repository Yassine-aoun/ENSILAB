<?php
  session_start();
  if (isset($_SESSION['email'])){
    echo "<h3>Vous êtes connecté en tant que " . $_SESSION['prenom']. " " .  $_SESSION['nom'] ."</h3>";
  }
  else{
    echo "Deconnecte";
  }

?>
<!DOCTYPE html>
<html dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="connected-style.css">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    </style>
  </head>
  <body>
    <div class="button-container">
      <input type="button" name="" class="button" id="continuer" value="Continuer" onclick="fn_continuer()">
      <input type="button" name="" class="button" id="deconnecter" value="Se Deconnecter" onclick="fn_deconnecter()">
    </div>
    <script src="connected_js.js"></script>
  </body>
</html>
