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
    
        this.toDoContainerUI
        this.toDoNameUI
        this.toDoDeleteBtnUI
        this.toDoEditBtnUI
    }
    addTask=()=>{
        this.toDoTaskList.push(
            new Task(this.title,this.description,this.color,this.date,this.check)
        )
        this.renderTaskList();
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

        // this.toDoEditBtn.addEventListener('click',this.editLabel)
        // this.toDoDeleteBtn.addEventListener('click',deleteLabel)
        // this.toDoNameUI.addEventListener('click',setCurrentLabel)
    }
    editLabel=()=>{
        this.toDoNameUI.type="text"
        this.toDoNameUI.className=`${this.toDoNameUI.className} inFocusToEdit`
        let oldLabelName=this.toDoNameUI.value

        this.toDoNameUI.addEventListener('keypress',(e)=>{
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