const RequiredInputs = document.getElementsByClassName("require");

const error = document.getElementsByClassName("error");
const mail = document.getElementById("Mail")
const form = document.getElementById("placement-form");

const clg_mail = /^[1-9]\d{5}@student\.nit\.ac\.in$/


mail.addEventListener("change",function(event){
    if(clg_mail.test(mail) === true){
        error[1].textContent = "";
    }
    else{  
        error[1].textContent = "*Enter institute Mail id only";
    }
});


form.addEventListener("submit",function(event){
    let isValid = true;
    for(let i=0;i<RequiredInputs.length;i++){
        if(!RequiredInputs[i].value){
            isValid=false;
            console.log(i);
            error[i].textContent = "* This field is required";
        }
    }
    if(!isValid){
        event.preventDefault();
    }
    else{
        alert("Story has been sent to the adminitrative suucessfully your story will be added once They have validated it")
    }
});