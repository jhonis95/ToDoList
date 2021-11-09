const taskTitle=document.getElementById("taskTitle");
const form=document.getElementsByName('ToDo');
const addBtn=document.getElementById('addBtn');

addBtn.addEventListener('click',addTask)

let myToDo= [];//array that have all the task

function addTask(){
    //make item apere in the DOM
    let li=document.createElement("li");
    let ul=document.getElementById("list");
    let inputValue=document.getElementById("newTask").value;//variable that have the value of the input
    let text=document.createTextNode(inputValue);//trasform the variable that have the value of the input in a usable string 

    ul.appendChild(li);
    li.appendChild(text);

    //creacting the task object
    let task= {
        check: false,
        value: inputValue
    };
    myToDo.push(task)//pushing the task to array myToDo[]

    // console.log(myToDo);//cheking the object

    document.getElementById("newTask").value = "";//to clean the label after submit
};

//XMLRequest AJAX
const xmlContactPage=new XMLHttpRequest();
xmlContactPage.open('GET','/contact.html',);
