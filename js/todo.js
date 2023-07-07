class Task{
    constructor(title,description,color,date,check){
        this.title=title
        this.description=description
        this.color=color
        this.date=date
        this.check=check

        this.tasckCheckBtn
        this.taskDeleteBtn
    }
    setTaskTitle=(taskInput)=>{
        this.title=taskInput
        console.log(this.title)
    }
    setTaskDescription=(taskInput)=>{
        this.description=taskInput
        console.log(this.description)
    }
    setTaskColor=(taskInput)=>{
        this.color=taskInput
        console.log(this.color)
    }
    setTaskDate=(taskInput)=>{
        this.date=taskInput
        console.log(this.date)
    }
    setTaskCheck=(taskInput)=>{
        this.check=taskInput
    }
    set setTaskCheckBtn(button){
        this.tasckCheckBtn=button
    }
    set setTaskDeleteBtn(button){
        this.taskDeleteBtn=button
    }
}
export default class ToDo extends Task{
    constructor(toDoName){
        super();
        this.toDoName=toDoName
        this.toDoTaskList=[]
        
        this.toDoListUI=document.getElementById("labelList")
        this.toDoContainerUI
    }
    addTask=()=>{
        this.toDoTaskList.push(
            new Task(this.title,this.description,this.color,this.date,this.check)
        )
        this.renderTaskList();
    }
    set setToDoContainerUI(elementUI){
        this.toDoListUI=elementUI
    }
    renderToDo=()=>{
        let labelList=document.getElementById("labelList")
        // let li=document.createElement("li")
        this.setToDoContainerUI(document.createElement("li"))
        let editBtn=document.createElement("button")
        let labelName=document.createElement("input")
        let deleteBtn=document.createElement("button")

        labelName.type="button"

        labelName.value=this.toDoName
        labelList.appendChild(li)
        li.appendChild(deleteBtn)
        li.appendChild(labelName)
        li.appendChild(editBtn)

        editBtn.className="editLabelBtn"
        labelName.className="labelName"
        deleteBtn.className="deleteLabel"

        editBtn.addEventListener('click',this.editLabel)
        deleteBtn.addEventListener('click',deleteLabel)
        labelName.addEventListener('click',setCurrentLabel)
    }
    editLabel=()=>{
        let input=this.parentElement.children[1]
        input.type="text"
        input.className=`${input.className} inFocusToEdit`
        let oldLabelName=input.value
    }
    ////////////////////
    renderTaskList=()=>{
        this.toDoTaskList.map((task)=>{
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

            taskName.innerText=task.title;
            taskDescription.value=task.description;
            taskDate.value=task.date
            taskColor.style.backgroundColor=task.color;
            checkBtn.checked=task.check
        })
    }
}