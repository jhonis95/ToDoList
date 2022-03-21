const addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',addTask)

function label(task,labelTitle){//constructor
    this.task=task;
    this.labelTitle=labelTitle;
}
function task(title,color,date,check,description){// constructor
    this.title=title;
    this.color= color;
    this.date= date;
    this.check= check;
    this.description=description;   
}

//add task menu
let myToDo= {};//object that have all the labels
myToDo.label1=new label(new task('testTask'),'label1');
renderTask()
function addTask(){
    let inputValue=document.getElementById("newTask").value;//variable that have the value of the input
    if(inputValue===""){//don't let the user put a empty input
        alert("sorry you must put a task")
        return
    }
    //creacting the task object
    myToDo.label1[inputValue]=new task(inputValue)//How to Set Dynamic Property Keys with ES6
    
    renderTask();
    rightShowSideMenu()
};
function checkHander(){
    let checkBox = document.getElementsByClassName("taskCheckBox");
    // for(let i=0;i<checkBox.length;i++){
    //     checkBox[i].addEventListener('change',(task)=>{//for each element in the list putting a event listener that do a function on change the checkbox
    //         if(task.target.checked===true){ //task is the current element, .target is a reference to the object onto which the event was dispatched
    //             myToDo[task.target.id].check=true//saving the tracked checkbox input to the current object
    //         }else{
    //             myToDo[task.target.id].check=false
    //         }
    //     })
    // }

}
function deleteHander(){
    //adding the event to the delete button
    let deleteBtn=document.getElementsByClassName("deleteBtn");//getting the HTML collection that have deleteBtn as class
    for(let i=0;i<deleteBtn.length;i++){        
        deleteBtn[i].addEventListener('click',(task)=>{//for each element of that collection add a event listener
            myToDo[task.target.id].delete=true //setting the value of delete element to true in the array object
            if(myToDo[task.target.id].delete===true){  // if that object have the elemente delete iquals true delete the object in the array
                myToDo.splice(task.target.id,1)
                renderTask()
            }
        })
    }
}
//List menu
function renderTask(){
    //make the container clean to render a new list
    let taskListContainer=document.getElementById("taskList")//div with the todo list
    let oldUl=document.getElementById("list")//getting the old ul id 
    let ul=document.createElement("ul")//creating new ul
    
    taskListContainer.replaceChild(ul,oldUl)//replacing the old ul for a new one
    ul.id="list"//setting new ul to oldUl id to list in that way we dont have problem to reuse the render function
    
    //make list show in the DOM

    Object.keys(myToDo.label1).forEach((task)=>{//obj.key is a function that returns a array and forEach
        if(myToDo.label1.labelTitle===myToDo.label1[task]){//dont print the name of the label
            document.getElementById('labelName').innerText=myToDo.label1[task]
            return
        }
        let text=document.createTextNode(task)
        let li=document.createElement("li")
        let input=document.createElement("input")
        let deleteBtn=document.createElement("button")

        //setting the input type,id adn class
        input.type="checkbox"
        input.id=`idTask${task}`
        input.className="taskCheckBox"
        deleteBtn.className="deleteBtn"
        deleteBtn.id=`deleteBtn${task}`

        if(myToDo.label1[`${task}`].check===true){//render the input following the object value
            input.checked=true 
        }else{
            input.checked=false
        }
        ul.appendChild(li)
        li.appendChild(input)
        li.appendChild(text)
        li.appendChild(deleteBtn)

    })
    // *************************************************
    checkHander()//funtion to track the input 
    deleteHander()//funtion to delete task on click button delete
    document.getElementById("newTask").value = "";//to clean the label after submit
}
//Side menu Button
const rightSideMenuBtn=document.getElementById('rightSideMenuBtn')
rightSideMenuBtn.addEventListener('click',rightShowSideMenu)
function rightShowSideMenu(){
    addMenu=document.getElementsByClassName("addTaskContainer")
    if(addMenu[0].style.transform!=`translateX(${36}%)`){
        addMenu[0].style.transform=`translateX(${36}%)`
    }else{
        addMenu[0].style.transform=`translateX(${126}%)`
    }
}
const leftSideMenuBtn=document.getElementById("leftSideMenuBtn")
leftSideMenuBtn.addEventListener('click',leftShowSideMenu)
function leftShowSideMenu(){
    addMenu=document.getElementsByClassName("addLabelContainer")
    if(addMenu[0].style.transform!=`translateX(${0}%)`){
        addMenu[0].style.transform=`translateX(${0}%)`
    }else{
        addMenu[0].style.transform=`translateX(${-90}%)`
    }
}