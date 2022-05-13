const addBtn=document.getElementById('addBtn');
const addLabel=document.getElementById('addLabelBtn');
const cancelAddLabelBtn=document.getElementById("cancelBtn")
const confirmAddLabelBtn=document.getElementById("confirmBtn")

addBtn.addEventListener('click',addTask)
addLabel.addEventListener('click',openAddLabelModal)
cancelAddLabelBtn.addEventListener('click',cancelAddNewLabel)
confirmAddLabelBtn.addEventListener('click',confirmAddNewLabel)

var currentLabel="Today";

class label {
    constructor(labelName) {
        {
            this.labelName = labelName;
        }
    }
}
class task {
    constructor(title, description, color, date, check) {
        this.title = title;
        this.description = description;
        this.check = check;
        this.color = color;
        this.date = date;
    }
}
//creacting the todo:
let myToDo=[]//object that have all the labels
myToDo["Today"]=new label("Today")
myToDo["Today"]["first task"]=new task("first task","for do today","#00bfff","2022-03-22",false)


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
                input.className=`labelName`
                input.type="button"
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
        currentLabel=Object.keys(myToDo)[0]
        renderLabelList()
        renderTask()
        leftShowSideMenu()
    }
}
function setCurrentLabel(){
    currentLabel=this.value
    if(this.type=="button"){
        leftShowSideMenu()
    }
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

    //tests if the myToDo is empty
    if(Object.keys(myToDo).length===0){
        let notice=document.createElement("h4")
        notice.className="taskNameOutput"
        notice.innerText=`
        The To Do List is empty please make a new Label and add a task
        `
        //erasing the label name in the task list
        document.getElementById('labelName').innerText=""
        ul.appendChild(notice)
        return
    }

    Object.keys(label).forEach((task)=>{//obj.key is a function that returns a array and forEach
        if(label.labelName===label[task]){//dont print the name of the label
            document.getElementById('labelName').innerText=label[task]
            return
        }

        let li=document.createElement("li")
        let taskName=document.createElement("h4")
        let checkBtn=document.createElement("input")
        let deleteBtn=document.createElement("button")
        let taskDescription=document.createElement("output")
        let taskDate=document.createElement("output")
        let taskColor=document.createElement("button")

        //setting the inputs type and class
        taskName.className="taskNameOutput"
        checkBtn.type="checkbox"
        checkBtn.className="taskCheckBox"
        deleteBtn.className="deleteBtn"
        taskDescription.className="taskDescriptionOutput"
        taskDate.className="taskDateOutput"
        taskColor.className="taskColorOutput"

        ul.appendChild(li)
        li.appendChild(taskColor)
        li.appendChild(checkBtn)
        li.appendChild(taskName)
        li.appendChild(taskDescription)
        li.appendChild(taskDate)
        li.appendChild(deleteBtn)

        taskName.innerText=myToDo[currentLabel][task].title
        taskDescription.value=myToDo[currentLabel][task].description
        taskDate.value=myToDo[currentLabel][task].date
        taskColor.style.backgroundColor=myToDo[currentLabel][task].color
        checkBtn.checked=myToDo[currentLabel][task].check
        

        checkBtn.addEventListener("change",setValueCheckBox)//render the checkBtn following the object value
        deleteBtn.addEventListener("click",deleteTaskListBtn)
    })
    // *************************************************
}
function setValueCheckBox(){
    let taskName=this.parentElement.children[2].innerText;//innerText is all the li not just the name of the label
    this.checked===true?myToDo[currentLabel][taskName].check=true : myToDo[currentLabel][taskName].check=false
}

function deleteTaskListBtn(){
    //adding the event to the delete button
    let taskName=this.parentElement.children[2].innerText;
    delete myToDo[currentLabel][taskName]
    renderTask()
}
// **********************************
// Side menu Button
const rightSideMenuBtn=document.getElementById('rightSideMenuBtn')
rightSideMenuBtn.addEventListener('click',rightShowSideMenu)

function rightShowSideMenu(){
    //left : 24vw to show and to hide is 92
    //translateX(-245px)
    let sideMenu=document.getElementById("rightSideMenu")
    // console.dir(addMenu)
    if(sideMenu.style.transform!=`translateX(${0}px)`){
        sideMenu.style.transform=`translateX(${0}px)`
    }else{
        sideMenu.style.transform=`translateX(${-245}px)`
    }
}

// NEEED REVISION
const leftSideMenuBtn=document.getElementById("leftSideMenuBtn")
leftSideMenuBtn.addEventListener('click',leftShowSideMenu)
//left : 24vw to show and to hide is 92
function leftShowSideMenu(){
    addMenu=document.getElementsByClassName("addLabelContainer")
    if(addMenu[0].style.transform!=`translateX(${0}%)`){
        addMenu[0].style.transform=`translateX(${0}%)`
    }else{
        addMenu[0].style.transform=`translateX(${-90}%)`
    }
}