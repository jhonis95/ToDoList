const addBtn=document.getElementById('addBtn');
const addLabel=document.getElementById('addLabelBtn');
const cancelAddLabelBtn=document.getElementById("cancelBtn")
const confirmAddLabelBtn=document.getElementById("confirmBtn")


addBtn.addEventListener('click',addTask)
addLabel.addEventListener('click',openAddLabelModal)
cancelAddLabelBtn.addEventListener('click',cancelAddNewLabel)
confirmAddLabelBtn.addEventListener('click',confirmAddNewLabel)


function label(labelName){//constructor
  {
    this.labelName=labelName
  }
}
function task(title,description,check,color,date){// constructor
  this.title=title;
  this.description=description;   
  this.check= check; 
  this.color= color;
  this.date= date;
}
//creacting the todo:
let myToDo=[]//object that have all the labels
myToDo["For Today"]=new label("For Today")
myToDo["For Today"]["first task"]=new task("first task","for do today",false,"blue","22/03/2022")


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
}this
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
    })
}
function editLabel(){
    let input=this.parentElement.children[1]
    input.type="text"
    input.className=`${input.className} inFocusToEdit`
    let oldLabelName=input.value
    console.log(Object.keys(myToDo))
    input.addEventListener('keypress',(e)=>{
        if(e.key==='Enter'){
            Object.keys(myToDo).forEach((Label)=>{
                if(oldLabelName===Label){
                    myToDo[Label].labelName=input.value
                    delete Object.assign(myToDo, {[input.value]: myToDo[Label] })[Label];
                }
            })
            console.log(Object.keys(myToDo))
            input.className=`labelName`
            input.type="button"
            renderLabelList()
        }
    })
}
// **********************************
// need a revision all the functions
function addTask(){
    let inputValue=document.getElementById("newTask").value;//variable that have the value of the input
    if(inputValue===""){//don't let the user put a empty input
        alert("sorry you must put a task")
        return
    }
    //creacting the task object
    myToDo.label[inputValue]=new task(inputValue)//How to Set Dynamic Property Keys with ES6
    
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
    let label=myToDo['For Today']
    Object.keys(label).forEach((task)=>{//obj.key is a function that returns a array and forEach
        if(label.labelName===label[task]){//dont print the name of the label
            document.getElementById('labelName').innerText=label[task]
            return
        }
        let text=document.createTextNode(task)
        let li=document.createElement("li")
        let input=document.createElement("input")
        let deleteBtn=document.createElement("button")

        //setting the input type,id and class
        input.type="checkbox"
        input.id=`idTask${task}`
        input.className="taskCheckBox"
        deleteBtn.className="deleteBtn"
        deleteBtn.id=`deleteBtn${task}`

        if(label[`${task}`].check===true){//render the input following the object value
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