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
    addToDo=()=>{
        this.listOfToDo.push(
            new ToDo(this.toDoName)
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
        })
    }
}
const App= new ToDoApp(appButtons,taskInput,inputToDoName)
App.toDoName="For Today"
App.addToDo()
console.log(App.listOfToDo)