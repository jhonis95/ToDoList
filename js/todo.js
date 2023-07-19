class Task{
    constructor(title,description,color,date,check){
        this.title=title
        this.description=description
        this.color=color
        this.date=date
        this.check=check

        this.taskCheckBtn
        this.taskDeleteBtn
    }
    setTaskTitle=(taskInput)=>{
        this.title=taskInput
    }
    setTaskDescription=(taskInput)=>{
        this.description=taskInput
    }
    setTaskColor=(taskInput)=>{
        this.color=taskInput
    }
    setTaskDate=(taskInput)=>{
        this.date=taskInput
    }
    setTaskCheck=(taskInput)=>{
        this.check=taskInput
    }
    setTaskCheckBtn=(button)=>{
        this.taskCheckBtn=button
    }
    setTaskDeleteBtn=(button)=>{
        this.taskDeleteBtn=button
    }
}


export default class ToDo extends Task{
    constructor(toDoName,isCurrentToDo){
        super();
        this.toDoName=toDoName
        this.toDoTaskList=[]
        this.currentToDo=isCurrentToDo

    
        this.toDoContainerUI
        this.toDoNameUI
        this.toDoDeleteBtnUI
        this.toDoEditBtnUI
    }
    addTask=(title,description,color,date)=>{
        this.toDoTaskList.push(
            new Task(title,description,color,date,false)
        )
        this.renderTaskList();
    }
    setCurrentToDo(value){
        this.currentToDo=value
    }
    setToDoContainerUI(elementUI){ //setting the container of todo: <li> object
        this.toDoContainerUI=elementUI
    }
    setToDoNameUI(elementUI){
        this.toDoNameUI=elementUI
    }
    setToDoBtnEditUI(elementUI){
        this.toDoNameUI=elementUI
    }
    setToDoBtnEditUI(elementUI){
        this.toDoEditBtnUI=elementUI
    }
    setToDoBtnDeleteUI(elementUI){
        this.toDoDeleteBtnUI=elementUI
    }
    renderToDo=()=>{
        let listContainer=document.getElementById("labelList")
        this.setToDoContainerUI(document.createElement("li"))
        this.setToDoNameUI(document.createElement("input"))
        this.setToDoBtnEditUI(document.createElement("button"))
        this.setToDoBtnDeleteUI(document.createElement("button"))

        this.toDoNameUI.type="button"

        this.toDoNameUI.value=this.toDoName
        listContainer.appendChild(this.toDoContainerUI)
        this.toDoContainerUI.appendChild(this.toDoDeleteBtnUI)
        this.toDoContainerUI.appendChild(this.toDoNameUI)
        this.toDoContainerUI.appendChild(this.toDoEditBtnUI)

        this.toDoEditBtnUI.className="editLabelBtn"
        this.toDoNameUI.className="labelName"
        this.toDoDeleteBtnUI.className="deleteLabel"

        this.toDoEditBtnUI.addEventListener('click',this.editLabel)
    }
    editLabel=()=>{
        this.toDoNameUI.type="text"
        this.toDoNameUI.className=`${this.toDoNameUI.className} inFocusToEdit`
        let oldLabelName=this.toDoNameUI.value

        this.toDoNameUI.addEventListener('keypress',(e)=>{
            if(e.key==='Enter'){
                !e.target.value==oldLabelName?this.toDoNameUI=e.target.value:''
                this.toDoNameUI.className=`labelName`
                this.toDoNameUI.type="button"
                this.toDoName=this.toDoNameUI.value
            }
        })
    }
    renderTaskList=()=>{
        let taskListContainer=document.getElementById("taskList")
        let oldUl=document.getElementById("list") 
        let ul=document.createElement("ul")

        taskListContainer.replaceChild(ul,oldUl)
        ul.id="list"   

        document.getElementById("labelName").textContent=this.toDoName;
        this.toDoTaskList.map((task)=>{
            let li=document.createElement("li")
            let taskName=document.createElement("h4")
            let checkBtn=document.createElement("input")
            let deleteBtn=document.createElement("button")
            let taskDescription=document.createElement("output")
            let taskDate=document.createElement("output")
            let taskColor=document.createElement("button")

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

            taskName.innerText=task.title;
            taskDescription.value=task.description;
            taskDate.value=task.date;
            taskColor.style.backgroundColor=task.color;
            checkBtn.checked=task.check

            task.setTaskCheckBtn(checkBtn)
            task.setTaskDeleteBtn(deleteBtn)
            
            task.taskCheckBtn.addEventListener('click',()=>{
                task.check==false?task.setTaskCheck(true):task.setTaskCheck(false)
            })
            task.taskDeleteBtn.addEventListener('click',()=>{
                let toDelete= this.toDoTaskList.indexOf(task)
                this.toDoTaskList.splice(toDelete,1)
                this.renderTaskList()
            })
        })
    }
}