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

const addBtn=document.getElementById('addBtn');
const addLabel=document.getElementById('addLabelBtn');
const cancelAddLabelBtn=document.getElementById("cancelBtn")
const confirmAddLabelBtn=document.getElementById("confirmBtn")



addBtn.addEventListener('click',addTask)
addLabel.addEventListener('click',openAddLabelModal)
cancelAddLabelBtn.addEventListener('click',cancelAddNewLabel)
confirmAddLabelBtn.addEventListener('click',confirmAddNewLabel)

class ToDoApp extends ToDo{
    constructor(addTaskBtn,taskInput){
        super();
        this.listOfToDo=[]
        this.addTaskBtn=addTaskBtn;
        if(taskInput){
            this.taskInputTitle=taskInput.taskNameInp
            this.taskInputDescription=taskInput.taskDescriptionInp
            this.taskInputColor=taskInput.taskColorInp
            this.taskInputDate=taskInput.taskDateInp
        }
    }  
}
const App= new ToDoApp()
window.onload(App())