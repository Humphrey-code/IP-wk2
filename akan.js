function myFunction() {
 function day (cc,yy,mm,dd){
return ((((cc/4)-2*cc-1)+((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7)+1
}
let year=toString.getElementById('yearofBirth')
let cc =parseInt(year.slice(0,2))
let yy =parseInt(year.slice(2,4))
let mm =getElementById('monthofBirth')
let dd =getElementById('dateofBirth')

let males=["Kwasi","kwadwo","Kwabena","Kwaku","Yaw", "Kofi", "Kwame"];
let females=["Akosua","Adwoa","Abenaa","Akua", "Yaa", "Afua", "Ama"];
if (gender=="male" && result== 0){
alert(males[0]);
}
else if(gender == "male" && result==1){
alert(males[1]);
}
else if(gender == "male" && result==2){
alert(males[2]);
}
else if(gender == "male" && result==3){
alert(males[3]);
}
else if(gender == "male" && result==4){
alert(males[4]);
}
else if(gender == "male" && result==5){
alert(males[5]);
}
else if(gender == "male" && result==6){
alert(males[6]);
}
else if(gender == "female" && result==0){
alert(females[0]);
}
else if(gender == "female" && result==1){
alert(females[1]);
}
else if(gender == "female" && result==2){
alert(females[2]);
}
else if(gender == "female" && result==3){
alert(females[3]);
}
else if(gender == "female" && result==4){
alert(females[4]);
}
else if(gender == "female" && result==6){
alert(females[5]);
}
else if (gender == "female" && result==6){
alert(females[6]);
}
else{
alert("null");
}
}
