function myFunction() {
  var year= document.getElementById('yearofBirth').value;
  var cc = Number(year.slice(0,2));
  var yy = Number(year.slice(2,4));
  var mm = Number(document.getElementById('monthofBirth').value);
  var dd = Number(document.getElementById('dateofBirth').value);

  var d =( ( ( ( cc / 4) - 2 * cc - 1) + ( ( 5 * yy / 4) ) + ( ( 26 * (mm + 1) / 10)) + dd) % 7)+1;
  var myMeme= Math.round(d);

  var Gender = document.getElementsByClassName('Gender');

  function whatGender(){
    for (singleGender of Gender){
      if (singleGender.checked){
        return singleGender.value;
      }
    }
  }

  let genderPicked = whatGender();

  var males=["Kwasi","kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var females=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


  if (genderPicked == "Male" && myMeme == 0){
  alert("Your Akan name is ".concat(males[0]));
  }
  else if(genderPicked == "Male" && myMeme == 1){
  alert("Your Akan name is ".concat(males[1]));
  }
  else if(genderPicked == "Male" && myMeme == 2){
  alert("Your Akan name is ".concat(males[2]));
  }
  else if(genderPicked == "Male" && myMeme == 3){
  alert("Your Akan name is ".concat(males[3]));
  }
  else if(genderPicked == "Male" && myMeme ==4){
  alert("Your Akan name is ".concat(males[4]));
  }
  else if(genderPicked == "Male" && myMeme ==5){
  alert("Your Akan name is ".concat(males[5]));
  }
  else if(genderPicked == "Male" && myMeme ==6){
  alert("Your Akan name is ".concat(males[6]));
  }
  else if(genderPicked == "Female" && myMeme ==0){
  alert("Your Akan name is ".concat(females[0]));
  }
  else if(genderPicked == "Female" && myMeme ==1){
  alert("Your Akan name is ".concat(females[1]));
  }
  else if(genderPicked == "Female" && myMeme ==2){
  alert("Your Akan name is ".concat(females[2]));
  }
  else if(genderPicked == "Female" && myMeme ==3){
  alert("Your Akan name is ".concat(females[3]));
  }
  else if(genderPicked == "Female" && myMeme ==4){
  alert("Your Akan name is ".concat(females[4]));
  }
  else if(genderPicked == "Female" && myMeme ==6){
  alert("Your Akan name is ".concat(females[5]));
  }
  else if (genderPicked == "Female" && myMeme ==6){
  alert("Your Akan name is ".concat(females[6]));
  }
  else{
  alert("null");
  }
}
