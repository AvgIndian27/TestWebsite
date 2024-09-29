document.getElementById('para-list').style.display = 'none';
let counter = 1;
function add_task(){
    let InputField = document.getElementById('InputField');
    let FieldValue = InputField.value;
    
    if (FieldValue!= ""){
    let Parafield = document.getElementById('para-list');
    let ListValue = document.createElement('p');
    ListValue.textContent = counter + '. ' + FieldValue;
    let CheckBox = document.createElement('input');
    CheckBox.type = 'checkbox';
   
    
    let delButton = document.createElement('button');
    delButton.textContent = "Delete";
    delButton.onclick = function(){
        Parafield.removeChild(ListValue);
        if (Parafield.children.length == 0) { 
            Parafield.style.display = 'none';
            counter = 1;
        }
    };
    ListValue.appendChild(delButton);
    ListValue.append(CheckBox);
    Parafield.appendChild(ListValue);

    Parafield.style.display = 'block'; 
    InputField.value = "";
    counter++;
    }
    else {    
        window.alert("Please enter a task.!!!");
    }
}


