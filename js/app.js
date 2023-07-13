import ToDo from "./todo.js"
//app buttons
const addTaskBtn=document.getElementById('addBtn');
const addLabelBtn=document.getElementById('addLabelBtn');
const confirmAddLabelBtn=document.getElementById("confirmBtn")
const cancelAddLabelBtn=document.getElementById("cancelBtn")
//task input
const taskTitle=document.getElementById("newTask")//variable that have the value of the input
const taskDescription=document.getElementById("description")
const taskDate=document.getElementById("date")
const taskColor=document.getElementById("pickColor")
//todo input
const inputToDoName=document.getElementById("newLabel")

const taskInput={
    taskTitle,
    taskDescription,
    taskDate,
    taskColor
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

        this.addTaskBtn.addEventListener('click',this.getCurrentToDo)
        this.addLabelBtn.addEventListener('click',this.openModal)
        this.confirmAddLabelBtn.addEventListener('click',this.addToDo)
        this.cancelAddLabelBtn.addEventListener('click',this.closeModal)
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
                // todo.renderTaskList() 
            })
            todo.toDoDeleteBtnUI.addEventListener('click',()=>{
                
                todo.renderToDo()
            })
        })
    }
    ///task
    getCurrentToDo(){
        this.listOfToDo.map((todo)=>{
            if(todo.currentToDo==true){
                this.addTask()
                todo.renderTaskList()
            }
        })
    }
}
const App= new ToDoApp(appButtons,taskInput,inputToDoName)
App.toDoName="For Today"
App.addToDo()
// setInterval(()=>{
    console.log(App)
// },10000)