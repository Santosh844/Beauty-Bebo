document.querySelector("form").addEventListener("submit",signin);

var reguser = JSON.parse(localStorage.getItem("userdatabase"));

function signin(event){
event.preventDefault();
var email = document.querySelector("#email").value;
var pass = document.querySelector("#pass").value;

for(var i = 0 ; i < reguser.length; i++){
    if(reguser[i].email = email && reguser[i].password == pass){
        window.location.href = "productpage.html"
    }
//     else{
//         alert("inavalid information")
//     }
}

}
