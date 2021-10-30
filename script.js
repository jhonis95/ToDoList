const taskTitle=document.getElementById("taskTitle");
const form=document.getElementsByName('ToDo');

function addTask(){
    //make item apere in the DOM
    let li=document.createElement("li");
    let ul=document.getElementById("list");
    let inputValue=document.getElementById("newTask").value;
    let text=document.createTextNode(inputValue);

    ul.appendChild(li);
    li.appendChild(text);
    //need to make
    //save the data in a object
    let task= {
        check: false,
        value: inputValue
    };
    let myToDo= [task];//array that have all the task
    //need to make a function to put the objet in the array
    console.log(myToDo);//chejing the object

    document.getElementById("newTask").value = "";//to clean the label after submit
};