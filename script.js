const taskTitle=document.getElementById("taskTitle");
const form=document.getElementsByName('ToDo');
const addBtn=document.getElementById('addBtn');

addBtn.addEventListener('click',addTask)

let myToDo= [];//array that have all the task

function addTask(){
    let inputValue=document.getElementById("newTask").value;//variable that have the value of the input

    //creacting the task object
    let task= {
        check: false,
        value: inputValue
    };
    myToDo.push(task)//pushing the task to array myToDo[]

    // console.log(myToDo);//cheking the object

    renderTask(inputValue);
};
function renderTask(input){
    //make item show in the DOM
    let li=document.createElement("li");
    let ul=document.getElementById("list");
    let text=document.createTextNode(input);//trasform the variable that have the value of the input in a usable string

    ul.appendChild(li);
    li.appendChild(text);
    
    document.getElementById("newTask").value = "";//to clean the label after submit
}
// Router /////////////////