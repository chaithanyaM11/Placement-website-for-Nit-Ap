const form = document.getElementById("company-form");
const email = document.getElementById("email");
const error = document.getElementsByClassName("error");

const roles = document.getElementById("Roles");
const role_btn = document.getElementById("add-role");

const ctc = document.getElementById("CTC");
const ctc_btn = document.getElementById("add-ctc");

const proc = document.getElementById("Hiring");
const proc_btn = document.getElementById("add-proc");

// const branch = document.getElementById("branch");
// const selected_branch = document.getElementById("selected-Branch");

const type = document.getElementById("type");

const inputs = form.elements;
// var Branches = [];

const CTC = /^[0-9]+$/;
// branch.addEventListener("change",function(){
//   const i = branch.selectedIndex;
//   if(i!==0){
//     let selected_brnch = branch.options[i];
//     if(selected_brnch){
//       const brnch = selected_brnch.value;
//       Branches.push(brnch);
//       selected_branch.textContent = Branches.join(', ');
//       branch.options[i].remove();
//     }
//    }
//  });

// Email validation
email.addEventListener("blur",function(event){
    const mail = /^[\w\-]+@([\w\-]+\.)+[\w]{2,4}$/;
    if(!email.value.match(mail)){
     error[1].textContent = "*Enter Valid Mail id";
    }
    else{  
     error[1].textContent = "";
    }
});

// Add a new input option for roles ctc and procation
role_btn.addEventListener("click",function(event){
  const space = document.createElement("br");
  const newDiv = document.createElement("div");
  const newDiv1 = document.createElement("div");
  newDiv.className = "error";
  newDiv1.className = "error";
  
  roles.appendChild(space);

  const del_btn = document.createElement("button");
  del_btn.className = "btn btn-danger";
  del_btn.innerHTML = "Remove";
  del_btn.setAttribute("type","button");
  del_btn.value = "dlt";

  const newRole = document.createElement("input");
  newRole.type = "text";
  newRole.name = "Roles[]";
  newRole.className = "form-control";
  newRole.placeholder = "Enter other roles offered by them";


  roles.appendChild(newRole);  
  roles.appendChild(newDiv);
  roles.appendChild(del_btn);
  roles.appendChild(newDiv1);

  del_btn.addEventListener("click",function(event){
    space.remove();
    roles.removeChild(newRole);
    roles.removeChild(newDiv);
    roles.removeChild(del_btn);
    roles.removeChild(newDiv1);
  });
});



ctc_btn.addEventListener("click",function(event){
  const space = document.createElement("br");
  ctc.appendChild(space);
  
  const newDiv = document.createElement("div");
  const newDiv1 = document.createElement("div");
  newDiv.className = "error";
  newDiv1.className = "error";

  const del_btn = document.createElement("button");
  del_btn.className = "btn btn-danger";
  del_btn.innerHTML = "Remove";
  del_btn.setAttribute("type","button");
  del_btn.setAttribute("value","dlt");
  
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "CTC[]";
  newInput.className = "form-control";
  newInput.placeholder = "Enter prev years ctc offered by them";

  ctc.appendChild(newInput);
  ctc.appendChild(newDiv);
  ctc.appendChild(del_btn);
  ctc.appendChild(newDiv1);
  // ctc.appendChild(space1);

  del_btn.addEventListener("click",function(event){
    // space1.remove();
    ctc.removeChild(space);
    ctc.removeChild(newInput);
    ctc.removeChild(newDiv);
    ctc.removeChild(del_btn);
    ctc.removeChild(newDiv1);
  });
});



proc_btn.addEventListener("click",function(event){
  const space = document.createElement("br");

  proc.append(space);

  const newDiv = document.createElement("div");
  const newDiv1 = document.createElement("div");
  newDiv.className = "error";
  newDiv1.className = "error";

  const del_btn = document.createElement("button");
  del_btn.className = "btn btn-danger";
  del_btn.innerHTML = "Remove";
  del_btn.setAttribute("type","button");
  del_btn.setAttribute("value","dlt");

  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.name = "Hiring_Process";
  newInput.className = "form-control";
  newInput.placeholder = "Enter Next round of your hiring process";

  proc.appendChild(newInput);
  proc.appendChild(newDiv);
  proc.appendChild(del_btn);
  proc.appendChild(newDiv1);

  del_btn.addEventListener("click",function(event){
    space.remove();
    proc.removeChild(newInput);
    proc.removeChild(newDiv);
    proc.removeChild(del_btn);
    proc.removeChild(newDiv1);
  });
  
});


// Total form validation
form.addEventListener("submit", function(event) {
    let isValid = true;
    let not_checked = 0;
    for (let i = 0; i < inputs.length; i++) {
      if(inputs[i].getAttribute("type") === "checkbox"){
        if(!inputs[i].checked){
          not_checked = not_checked+1;
        } 
        if(not_checked === 8){
          error[i].textContent = "* Check atleast one branch";
          isValid = false;
        }else{
          error[i].textContent = "";
        }
      }
      if(inputs[i].name === "CTC[]"){
        if(!inputs[i].value.match(CTC)){
          isValid = false;
          alert("Enter valid input");
        }
      }
      if (!inputs[i].value) {
          error[i].textContent = "* This field is required";
          isValid = false;
      } else {
        error[i].textContent = "";
      }
    }
    if (!isValid) {
      event.preventDefault();
    }
    else{
      alert("Form submitted successfully..!!");
    }
});