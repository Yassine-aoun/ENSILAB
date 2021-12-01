
document.getElementById('search-id').addEventListener('click',function() {
  console.log('showinput');
  type=document.getElementById('input-id').type;
  if (type == "text"){
    document.getElementById('input-id').type = "hidden";
  }
  else{
    document.getElementById('input-id').type = "text";
    document.getElementById('input-id').focus();
  }

});

document.getElementById('home_id').addEventListener('click', function() {
  load_acceuil();
})

document.getElementById('notif_id').addEventListener('click', function() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('col1').innerHTML = this.responseText;
    console.log("Notifications loaded.");
  }
  document.getElementById('col1').innerHTML = "";
  xhttp.open("GET", "notification_col1.php", true);
  xhttp.send();

})

document.getElementById('chat_id').addEventListener('click', function () {
  load_chat();
})

document.getElementById('account_id').addEventListener('click', function () {
  document.getElementById('col1_header').innerHTML = "Votre Profil";
  document.getElementById('col1_body').innerHTML = "LOADING...";
})

document.getElementById('settings_id').addEventListener('click', function () {
  document.getElementById('col1_header').innerHTML = "Votre Compte";
  document.getElementById('col1_body').innerHTML = "LOADING...";
})

document.getElementById('logout_id').addEventListener('click',function () {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.body.innerHTML += this.responseText;
    console.log("works?");
    window.location.replace("../index.php");
  }
  xhttp.open("GET", "../deconnect.php", true);
  xhttp.send();
})

function load_acceuil() {
  /*
  document.getElementById('col1_header').innerHTML = "Acceuil";
  document.getElementById('col1_body').innerHTML = "Bienvenue au LABO 2077";
  */

  document.getElementById('col2').innerHTML = "";
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('col2').innerHTML += this.responseText;
    console.log("Acceul loaded.");
    load_acceuil_functions();
  }
  xhttp.open("GET", "acceuil_body.php", true);
  xhttp.send();

  document.getElementById('col1').innerHTML ="";
  const xhttp2 = new XMLHttpRequest();
  xhttp2.onload = function() {
    document.getElementById('col1').innerHTML += this.responseText;
  }
  xhttp2.open("GET", "acceuil_col1.php", true);
  xhttp2.send();

}
function load_acceuil_functions() {

  document.getElementById('toggle_id').addEventListener('click',function() {
    console.log("toggled");
    if (document.getElementById('article-txt').style.color == "rgb(75, 112, 226)"){
      document.getElementById('article-txt').style.color = "#000";
      document.getElementById('annoucement-txt').style.color = "#4B70E2";
    }
    else{
      document.getElementById('article-txt').style.color = "#4B70E2";
      document.getElementById('annoucement-txt').style.color = "#000";
    }
  })

  document.getElementById('art2').addEventListener('click', function () {
    if (document.getElementById('art1').style.width =="65.5vw"){
      document.getElementById('art1').style.width = "20vw";
      document.getElementById('art1').style.height ="11.5vw";
      document.getElementById('apercu_id').style.height = "5vw";
      document.getElementById('apercu_id').style.width = "auto";
      document.getElementById('apercu_id').style.overflow ="hidden";
    }
    else{
      document.getElementById('art1').style.width = "65.5vw";
      document.getElementById('art1').style.height = "25vw";
      document.getElementById('apercu_id').style.width = "65vw";
      document.getElementById('apercu_id').style.height = "17vw";
      document.getElementById('apercu_id').style.overflow ="auto";
    }
    console.log(this);
  })
}

function load_chat() {

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('col1').innerHTML = this.responseText;
    console.log("Chat loaded.");
  }
  xhttp.open("GET", "discussion_col1.php", true);
  xhttp.send();

  document.getElementById('col2').innerHTML = "LOADING...";
  const xhttp2 = new XMLHttpRequest();
  xhttp2.onload = function() {
    document.getElementById('col2').innerHTML = this.responseText;
    console.log("Discussion loaded.");
    load_chat_functions();
    console.log("Chat functions loaded.");

  }
  xhttp2.open("GET", "discussion.php", true);
  xhttp2.send();
}

function load_chat_functions() {
  document.getElementById('send_id').addEventListener('click', function () {
    write_my_msg();
  })
  document.getElementById('msg_textarea_id').addEventListener('keyup', function (e) {
    if (e.keyCode == "13"){
      write_my_msg();
    }
  })
  document.getElementById('msg_textarea_id').addEventListener('keydown', function (e) {
    if (e.keyCode =="13"){
      e.preventDefault();
    }
  })
}
function write_my_msg() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById('msg_id').innerHTML += this.responseText;
    console.log("Msg loaded.");
    document.getElementById('msg_textarea_id').value ="";
    document.getElementById('msg_textarea_id').focus();
    document.getElementById('msg_id').scrollTop = document.getElementById('msg_id').scrollHeight;
  }
  xhttp.open("GET", "mymsg.php?msg="+document.getElementById('msg_textarea_id').value, true);
  console.log("Your msg : "+document.getElementById('msg_textarea_id').value);
  xhttp.send();
}
load_acceuil();
