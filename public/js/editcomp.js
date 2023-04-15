const form = document.getElementById("company-form");

const roles = document.getElementById("Roles");
const role_btn = document.getElementById("add-role");
const DelBtn = document.getElementsByClassName("dlt");
const delInp = document.getElementsByClassName("dlt-inpt");
const comp_del_btn = document.getElementById("dlt-comp");

const inputs = form.elements;

let changed = false;

role_btn.addEventListener("click",function(event){
    changed = true;
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
    newRole.name = "Roles";
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
      roles.removeChild(newDiv1);
      roles.removeChild(del_btn);
      
    });
  });

  for(let i=0;i<DelBtn.length;i++){
    DelBtn[i].addEventListener("click",function(event){
        delInp[i].remove();
        changed = true;
    });
}


for(let i=0;i<inputs.length;i++){
    inputs[i].addEventListener("change",function(event){
        changed = true;
    });
}



form.addEventListener("submit",function(event){
    for(let i=0;i<inputs.length;i++){
        if(!inputs[i].value){
            changed=false;
        }
    }    
    if(changed === false){
        alert("No changes have made yet");
        event.preventDefault();
    }
    else{
        alert("Updated succesfully");
    }
    
});

comp_del_btn.addEventListener("click",function(event){
    alert("Deleted Succesfully!!!");
});