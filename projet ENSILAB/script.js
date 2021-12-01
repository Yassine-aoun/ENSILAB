function load_sign_up() {
  document.getElementById('input-field-supp').innerHTML = "";
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('input-field-supp').innerHTML += this.responseText;
    console.log("Sign-up fields added.");
    document.getElementById('signin').remove();

    document.getElementById('signup').onclick = function() {
      submittion();
    }

  }
  xhttp.open("GET", "sign-up.php", true);
  xhttp.send();
}

function submittion() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('input-field-supp').innerHTML += this.responseText;
    console.log("Saved.");
    //location.reload();
    //document.getElementById('form_redirection').submit();
    //console.log(document.getElementById('form_redirection'));
    //window.location.replace("home.html");
  }
  email = document.getElementById('email').value;
  pwd = document.getElementById('pwd').value;
  nom = document.getElementById('nom').value;
  prenom = document.getElementById('prenom').value;

  if (!verif_champs()){
    console.log("Request hinibited.");
  }
  else{
    xhttp.open("GET", "savelogin.php?email="+email+"&pwd="+pwd+"&nom="+nom+"&prenom="+prenom, true);
    xhttp.send();
    console.log("Request sent");
  }
}

function connect() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById('input-field-supp').innerHTML += this.responseText;
    location.reload();
    console.log('done');
  }
  document.getElementById('input-field-supp').innerHTML = "";
  email_element = document.getElementById('email');
  pwd_element = document.getElementById('pwd');

  if (!validation_email(email_element)){
    //email_element.style.backgroundColor = "#D9D385";
    email_element.style.border = "2px solid #CD3626";
    document.getElementById('email-error').innerHTML = "E-mail invalide.";
    document.getElementById('email-error').style.color = "#CD3626";
    //vérifier si l'email existe dans la base de donnée.
    console.log("Request hinibited");
  }
  else{
    email_element.style.border = "none";
    document.getElementById('email-error').innerHTML = "";
    if (pwd_element.value==""){
      pwd_element.style.border = "2px solid #CD3626";
      document.getElementById('pwd-error').innerHTML = "Mot de passe invalide."
      document.getElementById('pwd-error').style.color = "#CD3626";
      console.log("Request hinibited");
    }
    else{
      pwd_element.style.border = "none";
      document.getElementById('pwd-error').innerHTML = "";
      xhttp.open("GET", "sign-in.php?email="+document.getElementById('email').value+"&pwd="+document.getElementById('pwd').value, true);
      xhttp.send();
      console.log("Request sent.");
    }
  }

}

function verif_champs() {
  email_element = document.getElementById('email');
  pwd_element = document.getElementById('pwd');
  nom_element = document.getElementById('nom');
  prenom_element = document.getElementById('prenom');

  if (!validation_email(email_element)){
    //email_element.style.backgroundColor = "#D9D385";
    email_element.style.border = "2px solid #CD3626";
    document.getElementById('email-error').innerHTML = "E-mail invalide.";
    document.getElementById('email-error').style.color = "#CD3626";
    //vérifier si l'email existe dans la base de donnée.
    return false;
  }
  else{
    email_element.style.border = "2px solid #2ECD26";
    document.getElementById('email-error').innerHTML = "";
  }
  if (pwd_element.value==""){
    pwd_element.style.border = "2px solid #CD3626";
    document.getElementById('pwd-error').innerHTML = "Mot de passe invalide."
    document.getElementById('pwd-error').style.color = "#CD3626";
    return false;
  }
  else{
    pwd_element.style.border = "2px solid #2ECD26";
    document.getElementById('pwd-error').innerHTML = "";
  }

  if (nom_element.value==""){
    nom_element.style.border = "2px solid #CD3626";
    document.getElementById('nom-error').innerHTML = "Nom invalide.";
    document.getElementById('nom-error').style.color = "#CD3626";
    return false;
  }
  else{
    nom_element.style.border = "2px solid #2ECD26";
    document.getElementById('nom-error').innerHTML ="";
  }

  if (prenom_element.value==""){
    prenom_element.style.border = "2px solid #CD3626";
    document.getElementById('prenom-error').innerHTML = "Prenom invalide";
    document.getElementById('prenom-error').style.color = "#CD3626";
    return false;
  }
  else{
    prenom_element.style.border = "2px solid #2ECD26";
    document.getElementById('prenom-error').innerHTML = "";
  }
  return true;
}

function validation_email(email){
  if(email.value==""){
    return false;
  }
  aux1=email.value.lastIndexOf("@");
  login=email.value.substring(0,aux1);
  aux2=email.value.lastIndexOf(".");
  ext=email.value.substring(aux2+1,email.length);
  dom=email.value.substring(aux1+1,aux2);

  if(login.length<=2){
    return false;
  }

  if(dom.length<=1){
    return false;
  }

  if((ext.length<2)||(ext.length>3)){
    return false;
  }
  return true;
}
