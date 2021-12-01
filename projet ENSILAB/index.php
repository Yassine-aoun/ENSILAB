<?php
  session_start();
  if (isset($_SESSION['email'])){
    header("Location: ./newpage");
  }
?>
<!DOCTYPE html>
<html dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="style.css">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    </style>
  </head>
  <body>
    <div class="main">

      <div class="container">
        <div class="logo">
          <span class="title">Bienvenue !</span>
          <!--
          <img src="logo.png" alt="" style="width:150px">
          -->
          <h3 style="color:#a0a5a8;">Si vous n'avez pas de compte créez-en un!</h3>
        </div>


          <div class="info">
            <span class="title">Se Connecter</span>

            <div class="input-info" id="input-field">
              <input type="text" id="email" class="input" placeholder="Adresse e-mail" required>
              <span id="email-error"></span>
              <input type="password" id="pwd" class="input" placeholder="Password" required>
              <span id="pwd-error"></span>
              <div class="input-info" id="input-field-supp">

              </div>
            </div>

            <span class="button-container" id="before-buttons">
              <input type="button" name="" class="button" value="S'inscrire" id="signup" onclick="load_sign_up()">
              <input type="button" name="" class="button" value="Se connecter" id="signin" onclick="connect()">
            </span>
          </div>


      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
