//Log in
function Log_in() {
    //console.log("hi")
    window.location.assign("Loginpage.html")
  }
//main page
function main(){
    //console.log('hey')
    window.location.assign("mainpage.html")
}
//Sign in
function Sign_up(){
  window.location.assign("Signuppage.html")
}
//Horror books
function horror(){
  window.location.assign("Horrorbooks.html")
}
//Funny movies
function humor(){
  window.location.assign("funnymovies.html")
}
//Science fiction
function sciencefiction(){
  window.location.assign("sciencefictionseries.html")}
//show and hide the infomation to flash
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//comments
function displayValue() {
  // Get the value of the input field
  var inputValue = document.getElementById("inputField").value;
  
  // Display the value in the output
  document.getElementById("output").innerHTML =  inputValue;
  
}
//heder
function openCity(cityName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;

}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//go to the home page button
function goback(){
  window.location.assign("mainpage.html")
}
