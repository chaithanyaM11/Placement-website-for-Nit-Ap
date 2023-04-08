// Login form
const form = document.getElementById("login-form");
const error = document.getElementById("error");
const show = document.getElementById("checkbox");
const password = document.getElementById("password");
const username = document.getElementById("username");

show.addEventListener("change",function(event){
   if(show.checked){
    password.setAttribute("type","text");
   }
   else{
    password.setAttribute("type","password");
   }
});

form.addEventListener("submit", function(event) {
  const userVal = username.value;
  const passVal = password.value;
  if (!passVal || !userVal) {
    event.preventDefault();
    error.textContent = "* Username and password are required";
  } else {
    error.textContent = "";  
  }
});
 