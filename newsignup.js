document.querySelector("form").addEventListener("submit",signin);
var userstack = JSON.parse(localStorage.getItem("userdatabase")) || [];
 function signin(event){
     event.preventDefault();
     var email = document.querySelector(".email").value
     var pass = document.querySelector("#pass").value
     var user = document.querySelector("#user").value
     var mobile= document.querySelector("#mobile").value

     var userdata = {
         emailadd:email,
         password:pass,
         username:user,
         mobileno:mobile,
     };
 console.log(userdata);
userstack.push(userdata);
localStorage.setItem("userdatabase",JSON.stringify(userstack))
alert("Your Account Created")
window.location.href = "login.html"
 }