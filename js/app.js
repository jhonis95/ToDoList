import ToDo from "./todo.js"
//app buttons
const addTaskBtn=document.getElementById('addBtn');
const addLabelBtn=document.getElementById('addLabelBtn');
const confirmAddLabelBtn=document.getElementById("confirmBtn")
const cancelAddLabelBtn=document.getElementById("cancelBtn")
//task input
const taskNameInp=document.getElementById("newTask")//variable that have the value of the input
const taskDescriptionInp=document.getElementById("description")
const taskColorInp=document.getElementById("pickColor")
const taskDateInp=document.getElementById("date")
//todo input
const inputToDoName=document.getElementById("newLabel")

const taskInput={
    taskNameInp,
    taskDescriptionInp,
    taskColorInp,
    taskDateInp
}

const appButtons={
    addTaskBtn,
    addLabelBtn,
    cancelAddLabelBtn,
    confirmAddLabelBtn
}

class ToDoApp extends ToDo{
    constructor(appButtons,taskInput,toDoInput){
        super();
        this.listOfToDo=[]
        if(appButtons){
            this.addTaskBtn=appButtons.addTaskBtn
            this.addLabelBtn=appButtons.addLabelBtn
            this.confirmAddLabelBtn=appButtons.confirmAddLabelBtn
            this.cancelAddLabelBtn=appButtons.cancelAddLabelBtn
        }
        if(taskInput){
            this.taskInputTitle=taskInput.taskNameInp
            this.taskInputDescription=taskInput.taskDescriptionInp
            this.taskInputColor=taskInput.taskColorInp
            this.taskInputDate=taskInput.taskDateInp
        }
        if(toDoInput){
            this.toDoInput=toDoInput
        }
        this.toDoInput.addEventListener('change',(event)=>{
            this.toDoName=event.target.value
        })
        
        this.taskInputTitle.addEventListener('change',()=>{
            this.setTaskTitle(this.taskInputTitle.value)
        })
        this.taskInputDescription.addEventListener('change',()=>{
            this.setTaskDescription(this.taskInputDescription.value)
        })
        this.taskInputColor.addEventListener('change',()=>{
            this.setTaskColor(this.taskInputColor.value)
        })
        this.taskInputDate.addEventListener('change',()=>{
            this.setTaskDate(this.taskInputDate.value)
        })

        this.addTaskBtn.addEventListener('click',this.getCurrentToDo)
        this.addLabelBtn.addEventListener('click',this.openModal)
        this.confirmAddLabelBtn.addEventListener('click',this.addToDo)
        this.cancelAddLabelBtn.addEventListener('click',this.closeModal)

        this.leftSideMenuBtn=document.getElementById("leftSideMenuBtn")
        this.leftSideMenuBtn.addEventListener('click',this.toggleLeftSideMenu)

        this.rightSideMenuBtn=document.getElementById('rightSideMenuBtn')
        this.rightSideMenuBtn.addEventListener('click',this.toggleRightSideMenu)
    }
    closeModal=()=>{
        document.getElementById("addLabelModal").className="addLabelModal hide"
    }
    openModal=()=>{
        document.getElementById("addLabelModal").className="addLabelModal"
    }
    resetCurrentToDo(){
        return(
            this.listOfToDo.map((todo)=>{
                todo.setCurrentToDo(false)
            })
        )
    }
    addToDo=()=>{
        this.resetCurrentToDo()
        this.listOfToDo.push(
            new ToDo(this.toDoName,true)
        )
        this.renderToDoList()
        this.closeModal()
    }
    renderToDoList(){
        let labelListContainer= document.getElementById("labelListContainer")//Div container that have the label list
        let oldUl=document.getElementById("labelList")//getting the old ul id 
        let ul=document.createElement("ul")//creating new ul

        labelListContainer.replaceChild(ul,oldUl) //update the label list replacing for a new ul 
        ul.id="labelList"

        this.listOfToDo.map((todo)=>{
            todo.renderToDo()
            todo.toDoNameUI.addEventListener('click',()=>{
                this.resetCurrentToDo()
                todo.currentToDo=true;
                todo.renderTaskList()
            })
            todo.toDoDeleteBtnUI.addEventListener('click',()=>{
                let toDelete =this.listOfToDo.indexOf(todo)
                this.listOfToDo.splice(toDelete,1)
                this.resetCurrentToDo()
                this.listOfToDo[0].currentToDo=true;
                this.renderToDoList()
                this.listOfToDo[0].renderTaskList()
            })
        })
    }
    getCurrentToDo=()=>{
        this.title==''||this.description==''||this.color==''||this.date==''?(
            alert("sorry you must add all the task inputs")
        ):
        (
            this.listOfToDo.map((todo)=>{
                if(todo.currentToDo==true){
                    todo.addTask(this.title,this.description,this.color,this.date)
                    document.getElementById("labelName").textContent=todo.toDoName
                    todo.renderTaskList()
                    this.cleanInputs()
                    return
                }
            })
        );
    }
    cleanInputs=()=>{
        this.taskInputTitle.value=''
        this.taskInputDescription.value=''
        this.taskInputColor.value=''
        this.taskInputDate.value=''

        this.setTaskTitle(this.taskInputTitle.value)
        this.setTaskDescription(this.taskInputDescription.value)
        this.setTaskColor(this.taskInputColor.value)
        this.setTaskDate(this.taskInputDate.value)
    }
    toggleLeftSideMenu=()=>{
        const addMenu=document.getElementsByClassName("addLabelContainer")
        if(addMenu[0].style.transform!=`translateX(${0}%)`){
            addMenu[0].style.transform=`translateX(${0}%)`
        }else{
            addMenu[0].style.transform=`translateX(${-90}%)`
        }
    }
    toggleRightSideMenu=()=>{
        let sideMenu=document.getElementById("rightSideMenu")
        if(sideMenu.style.transform!=`translateX(${0}px)`){
            sideMenu.style.transform=`translateX(${0}px)`
        }else{
            sideMenu.style.transform=`translateX(${-245}px)`
        }
    }
}
const App= new ToDoApp(appButtons,taskInput,inputToDoName)
App.toDoName="For Today"
App.addToDo()
App.listOfToDo.map(todo=>todo.addTask("task exemple","it's at description of the task","blue","2023-07-19"))
App.renderToDoList()
App.cleanInputs()
