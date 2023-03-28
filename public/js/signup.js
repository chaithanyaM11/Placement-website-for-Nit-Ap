const form = document.getElementById("Signup-form");
const email = document.getElementById("email");
const error = document.getElementsByClassName("error");
const password = document.getElementById("password");
const confpass = document.getElementById("confpass");
const inputs = form.elements;

email.addEventListener("blur",function(event){
 const mail = /^[\w\-]+@([\w\-]+\.)+[\w]{2,4}$/;
 if(!email.value.match(mail)){
  error[1].textContent = "*Enter Valid Mail id";
 }
 else{  
  error[1].textContent = "";
 }
});

password.addEventListener("blur",function(event){
 const dig = /[0-9]/;
 const cap = /[A-Z]/;
 const small = /[a-z]/;
 const special = /[+*@#$^!_\-]/;
 
 if(!password.value.match(dig)||!password.value.match(cap)||!password.value.match(small)||!password.value.match(special)||password.value.len<8){
  error[4].textContent = "Password must consist of atleast 1 Capital letter, 1 small letter, 1 digit, 1 special character (That includes: + * @ # $ ^ ! _ -)";
 }else{
  error[4].textContent = " "; 
 }
});


form.addEventListener("submit", function(event) {
  let isValid = true;
  let passValid = true;
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      error[i].textContent = "* This field is required";
      isValid = false;
    } else {
      error[i].textContent = "";
    }
  }
  if(confpass.value !== password.value){
    passValid = false;
    error[5].textContent = "Password didn't matched!!!";
  }
  else{
    error[5].textContent = " ";
  }
  if (!isValid || !passValid) {
    event.preventDefault();
  }
});