const addBtn=document.getElementById('addBtn');
const addLabel=document.getElementById('addLabelBtn');
const cancelAddLabelBtn=document.getElementById("cancelBtn")
const confirmAddLabelBtn=document.getElementById("confirmBtn")

addBtn.addEventListener('click',addTask)
addLabel.addEventListener('click',openAddLabelModal)
cancelAddLabelBtn.addEventListener('click',cancelAddNewLabel)
confirmAddLabelBtn.addEventListener('click',confirmAddNewLabel)

var currentLabel="Today";

function label(labelName){//constructor
  {
    this.labelName=labelName
  }
}
function task(title,description,color,date,check){// constructor
  this.title=title;
  this.description=description;   
  this.check= check; 
  this.color= color;
  this.date= date;
}
//creacting the todo:
let myToDo=[]//object that have all the labels
myToDo["Today"]=new label("Today")
myToDo["Today"]["first task"]=new task("first task","for do today","#00bfff","22/03/2022",false,)


//start render the list of task and labels
renderTask()
renderLabelList()

//**********************************************/
function openAddLabelModal(){
    document.getElementById('newLabel').value=""
    let modal = document.getElementById("addLabelModal");
    modal.className="addLabelModal";
}
function confirmAddNewLabel(){
    let newLabel=document.getElementById('newLabel').value;
    myToDo[`${newLabel}`]=new label(newLabel);
    cancelAddNewLabel();
    renderLabelList();
}
function cancelAddNewLabel(){
    let modal = document.getElementById("addLabelModal")
    modal.className="addLabelModal hide"
}
function renderLabelList(){
    let labelListContainer= document.getElementById("labelListContainer")//Div container that have the label list
    let oldUl=document.getElementById("labelList")//getting the old ul id 
    let ul=document.createElement("ul")//creating new ul

    labelListContainer.replaceChild(ul,oldUl) //update the label list replacing for a new ul 
    ul.id="labelList"
    
    Object.keys(myToDo).forEach((label)=>{
        let labelList=document.getElementById("labelList")
        let li=document.createElement("li")
        let editBtn=document.createElement("button")
        let labelName=document.createElement("input")
        let deleteBtn=document.createElement("button")

        labelName.type="button"

        labelName.value=myToDo[label].labelName
        labelList.appendChild(li)
        li.appendChild(deleteBtn)
        li.appendChild(labelName)
        li.appendChild(editBtn)

        editBtn.className="editLabelBtn"
        labelName.className="labelName"
        deleteBtn.className="deleteLabel"

        editBtn.addEventListener('click',editLabel)
        deleteBtn.addEventListener('click',deleteLabel)
        labelName.addEventListener('click',setCurrentLabel)
    })
}
function editLabel(){
    let input=this.parentElement.children[1]
    input.type="text"
    input.className=`${input.className} inFocusToEdit`
    let oldLabelName=input.value
    
    input.addEventListener('keypress',(e)=>{
        if(e.key==='Enter'){
            if(input.value==oldLabelName){//making sure the user did change the number
                return
            }
            Object.keys(myToDo).forEach((Label)=>{
                if(oldLabelName===Label){
                    myToDo[Label].labelName=input.value
                    delete Object.assign(myToDo, {[input.value]: myToDo[Label] })[Label];
                }
            })
            input.className=`labelName`
            input.type="button"
            renderLabelList()
        }
    })
}
function deleteLabel(){
    let input=this.parentElement.children[1]
    if(myToDo[`${input.value}`].labelName===`${input.value}`){
        delete myToDo[`${input.value}`]
        renderLabelList()
    }
}
function setCurrentLabel(){
    currentLabel=this.value
    renderTask()
}

//adding task menu
function addTask(){
    let taskTitle=document.getElementById("newTask").value;//variable that have the value of the input
    let taskDescription=document.getElementById("description").value
    let taskDate=document.getElementById("date").value
    let taskColor=document.getElementById("pickColor").value
    if(taskTitle===""){//don't let the user put a empty input
        alert("sorry you must put a task")
        return
    }
    //creacting the task object
    myToDo[currentLabel][taskTitle]=new task(taskTitle,taskDescription,taskColor,taskDate,false)//How to Set Dynamic Property Keys with ES6

    //to clean input after submit
    document.getElementById("newTask").value = null
    document.getElementById("description").value = null
    document.getElementById("date").value = null
    document.getElementById("pickColor").value = "#000000"

    renderTask()//show the task in the list
    rightShowSideMenu()//closing the add task menu
};

//task List menu
function renderTask(){
    //make the container clean to render a new list
    let taskListContainer=document.getElementById("taskList")//div with the todo list
    let oldUl=document.getElementById("list")//getting the old ul id 
    let ul=document.createElement("ul")//creating new ul
    
    taskListContainer.replaceChild(ul,oldUl)//replacing the old ul for a new one
    ul.id="list"//setting new ul to oldUl id to list in that way we dont have problem to reuse the render function
    
    //make list show in the DOM
    let label=myToDo[currentLabel]
    Object.keys(label).forEach((task)=>{//obj.key is a function that returns a array and forEach
        if(label.labelName===label[task]){//dont print the name of the label
            document.getElementById('labelName').innerText=label[task]
            return
        }

        let li=document.createElement("li")
        let text=document.createTextNode(task)
        let checkBtn=document.createElement("input")
        let deleteBtn=document.createElement("button")
        let taskDescription=document.createElement("output")
        let taskDate=document.createElement("output")
        let taskColor=document.createElement("button")

        //setting the inputs type and class
        checkBtn.type="checkbox"
        checkBtn.className="taskCheckBox"
        deleteBtn.className="deleteBtn"
        taskDescription.className="taskDescriptionOutput"
        taskDate.className="taskDateOutput"
        taskColor.className="taskColorOutput"
        
        ul.appendChild(li)
        li.appendChild(checkBtn)
        li.appendChild(text)
        li.appendChild(taskDescription)
        li.appendChild(taskDate)
        li.appendChild(taskColor)
        li.appendChild(deleteBtn)

        taskDescription.value=myToDo[currentLabel][task].description
        taskDate.value=myToDo[currentLabel][task].date
        taskColor.style.backgroundColor=myToDo[currentLabel][task].color

        checkBtn.addEventListener("change",setValueCheckBox)//render the checkBtn following the object value
    })
    // *************************************************
    deleteHander()//funtion to delete task on click button delete
}
function setValueCheckBox(){
    let taskName=this.parentElement.innerText;
    this.checked===true?myToDo[currentLabel][taskName].check=true : myToDo[currentLabel][taskName].check=false
}
// **********************************
//NEEED REVISION
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