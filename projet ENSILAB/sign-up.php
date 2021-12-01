<input type="text" name="" class="input" id="nom" placeholder="Nom" required>
<span id="nom-error"></span>
<input type="text" name="" class="input" id="prenom" placeholder="Prenom" required>
<span id="prenom-error"></span>
<div style="width:21vw; margin-top:5px; margin-bottom:15px;"><label>Date de naissance: </label></div>
<div class="date">
  <select class="date-input" name="" >
    <?php
      for ($i = 1; $i < 31 ; $i++){
        echo "<option value=$i>$i</option>";
      }
    ?>
  </select>

  <select class="date-input" name="">
    <?php
    $mois= array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Nouvembre", "Décembre");
    for($i = 0; $i < count($mois); $i++ ){
      echo "<option value=$mois[$i]>$mois[$i]</option>";
    }
    ?>
  </select>

  <select class="date-input" name="">
    <?php
      for($i=1950; $i<2022; $i++){
        echo "<option value='$i'>$i</option>";
      }
    ?>
  </select>
</div>
