// export default function task(nome,description,date,check){
    // function setParameters(newName,newDescription,newDate,newCheck){
    //     return (
    //         this.name=newName,
    //         this.description=newDescription,
    //         this.date=newDate,
    //         this.check=newCheck
    //     )
    // }
//     return{
//         nome,
//         description,
//         date,
//         check,
//         setParameters
//     }
// }
//******************** */
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
    constructor(appButtons,taskInput){
        super();
        this.listOfToDo=[]
        if(appButtons){
            this.addTaskBtn=appButtons.addTaskBtn,
            this.addLabelBtn=appButtons.addLabelBtn,
            this.confirmAddLabelBtn=appButtons.confirmAddLabelBtn,
            this.cancelAddLabelBtn=appButtons.cancelAddLabelBtn
        }
        this.addTaskBtn=appButtons;
        if(taskInput){
            this.taskInputTitle=taskInput.taskNameInp
            this.taskInputDescription=taskInput.taskDescriptionInp
            this.taskInputColor=taskInput.taskColorInp
            this.taskInputDate=taskInput.taskDateInp
        }
    }  
}
const App= new ToDoApp(appButtons,taskInput)
console.log(App)