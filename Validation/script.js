function check()
{
document.getElementById("sub").style.visibility = "visible";
var name=document.form.name.value;
var age=document.form.age.value;
var email = document.form.email.value;
var ph = document.form.ph.value;
var sel = document.getElementById("dept")
sel = sel.options[sel. selectedIndex].value
var at = email.indexOf("@");
var dot = email.lastIndexOf(".");

if (name==null || name==""){
alert("Name can't be blank");
return false;
}
else if(age<10 || age==null){
alert("you cannot register because of age restriction");
return false;
}
else if(age<10 || age==null){
alert("you cannot register because of age restriction");
return false;
}
else if(email==null || email=="" || at<1 || dot<at+2 || dot+2 >= email.length){
alert("you cannot register because of Invalid email address");
return false;
}
else if(ph.length<6 || ph==null || ph=="" || ph.charAt(0) == "0"){
alert("Invalid Phone number please enter again.");
return false;
}
else if(!document.getElementById('opt1').checked ||
!document.getElementById('opt2').checked){
alert("Please enter your gender.");
return false;
}
else if(document.getElementById('opt1').checked==false ||
document.getElementById('opt2').checked==false){
alert("Please enter your gender.");
return false;
}
else if(sel == null){
alert("Please enter your depatment.");
return false;
}
else if(document.getElementById('opt').checked==false){
alert("Please enter your subject.");
return false;
}
document.getElementById("sub").style.visibility = "visible";
}
