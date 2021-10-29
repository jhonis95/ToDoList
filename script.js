const taskTitle=document.getElementById("taskTitle");
const form=document.getElementsByName('ToDo');

function addTask(){
    let li=document.createElement("li");
    let ul=document.getElementById("list");
    let inputValue=document.getElementById("newTask").value;
    let text=document.createTextNode(inputValue);

    ul.appendChild(li);
    li.appendChild(text);

    document.getElementById("newTask").value = "";//to clean the label after submit
};