function fn_continuer() {
  window.location.replace("mypage.html");
  console.log("replaced");
}

function fn_deconnecter() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.body.innerHTML += this.responseText;
    console.log("works?");
    window.location.replace("index.php");
  }
  xhttp.open("GET", "deconnect.php", true);
  xhttp.send();
}
