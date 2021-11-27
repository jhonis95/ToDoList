const addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',addTask)

let myToDo= [];//array that have all the task

function addTask(){
    let inputValue=document.getElementById("newTask").value;//variable that have the value of the input
    if(inputValue===""){//don't let the user put a empty input
        alert("sorry you must put a task")
        return
    }
    //creacting the task object
    let task= {
        check: false,
        value: inputValue,
        delete: false
    };
    myToDo.push(task)//pushing the task to array myToDo[]
    
    renderTask();
};
function renderTask(){
    //make the container clean to render a new list
    let taskListContainer=document.getElementById("taskList")//div with the todo list
    let oldUl=document.getElementById("list")//getting the old ul id 
    let ul=document.createElement("ul")//creating new ul
    
    taskListContainer.replaceChild(ul,oldUl)//replacing the old ul for a new one
    ul.id="list"//setting new ul to oldUl id to list in that way we dont have problem to reuse the render function
    //make list show in the DOM
    for(let i=0;i<myToDo.length;i++){
        let text=document.createTextNode(myToDo[i].value)
        let li=document.createElement("li")
        let input=document.createElement("input")
        let deleteBtn=document.createElement("button")
        //setting the input type,id adn class
        input.type="checkbox"
        input.id=`${i}`
        input.className="taskCheckBox"

        deleteBtn.className="deleteBtn"
        deleteBtn.id=`${i}`
        deleteBtn.innerText="delete"
        
        if(myToDo[i].check===true){//render the input following the object value
            input.checked=true 
        }else{
            input.checked=false
        }
        
        ul.appendChild(li)
        li.appendChild(input)
        li.appendChild(text)
        li.appendChild(deleteBtn)
    }
    checkHander()//funtion to track the input 
    deleteHander()//funtion to delete task on click button delete
    document.getElementById("newTask").value = "";//to clean the label after submit
}
function checkHander(){
    let checkBox = document.getElementsByClassName("taskCheckBox");
    for(let i=0;i<checkBox.length;i++){
        checkBox[i].addEventListener('change',(task)=>{//for each element in the list putting a event listener that do a function on change the checkbox
            if(task.target.checked===true){ //task is the current element, .target is a reference to the object onto which the event was dispatched
                myToDo[task.target.id].check=true//saving the tracked checkbox input to the current object
            }else{
                myToDo[task.target.id].check=false
            }
        })
    }

}
function deleteHander(){
    //adding the event to the delete button
    let deleteBtn=document.getElementsByClassName("deleteBtn");//getting the HTML collection that have deleteBtn as class
    for(let i=0;i<deleteBtn.length;i++){        
        deleteBtn[i].addEventListener('click',(task)=>{//for each element of that collection add a event listener
            myToDo[task.target.id].delete=true
            if(myToDo[task.target.id].delete===true){
                myToDo.splice(task.target.id,1)
                renderTask()
            }
        })
    }
}
//Router 