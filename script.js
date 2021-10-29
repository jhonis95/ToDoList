const addTaskBtn= document.getElementsByClassName("addBtn");
const taskTitle=document.getElementById("taskTitle");
const form=document.getElementsByName('ToDo');
addTaskBtn.onClick=addTask();
function addTask(taskTitle,form){
    // alert("Hello! I am an alert box!!");
    form.forEach(Element => {//erro para usar o forEach
        //some ideas for fix
        //creat a array of elements and then use foreach
        const input=document.createElemen("INPUT");
        const label=document.createElement("LABEL");

        input.type="checkbox";
        label.value=form.value;

        taskTitle.appendChild(input);
        taskTitle.appendChild(label)
    });
    alert("Hello! I am an alert box!!");
};