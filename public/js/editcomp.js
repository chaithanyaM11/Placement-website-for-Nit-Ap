const newOption = document.getElementById("another")
const addButton = document.getElementById("addButton")
const selected = document.getElementById("selectedField")

addButton.addEventListener("click",function(event){
    const newSelect = document.createElement("select");
    newSelect.type = "text";
    newSelect.name = "option";
    newSelect.className = "form-control";
    newSelect.placeholder = "Enter other roles offered by them";
    
    const NewOption = document.createElement("option");
    NewOption.value = ""
    NewOption.innerHTML = "Select this field"
    newSelect.appendChild(NewOption)

    const NewOption1 = document.createElement("option");
    NewOption1.value = "1"
    NewOption1.innerHTML = "Name"
    newSelect.appendChild(NewOption1)

    const NewOption2 = document.createElement("option");
    NewOption2.value = "2"
    NewOption2.innerHTML = "Mail"
    newSelect.appendChild(NewOption2)

    const NewOption3 = document.createElement("option");
    NewOption3.value = "3"
    NewOption3.innerHTML = "Description"
    newSelect.appendChild(NewOption3)

    const NewOption4 = document.createElement("option");
    NewOption4.value = "6"
    NewOption4.innerHTML = "Type"
    newSelect.appendChild(NewOption4)

    const NewOption5 = document.createElement("option");
    NewOption5.value = "7"
    NewOption5.innerHTML = "Branches"
    newSelect.appendChild(NewOption5)

    const NewOption6 = document.createElement("option");
    NewOption6.value = "8"
    NewOption6.innerHTML = "Roles"
    newSelect.appendChild(NewOption6)

    const NewOption7 = document.createElement("option");
    NewOption7.value = "9"
    NewOption7.innerHTML = "CTC Offers"
    newSelect.appendChild(NewOption7)

    const NewOption8 = document.createElement("option");
    NewOption8.value = "10"
    NewOption8.innerHTML = "Hiring Process"
    newSelect.appendChild(NewOption8)

    newOption.appendChild(newSelect);

  

});


