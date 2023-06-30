class Task{
    constructor() {
        this.title,
        this.description,
        this.color,
        this.date,
        this.check=false
    }
    setTaskTitle=(title)=>{
        this.title=title
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
}
export default class ToDo extends Task{
    constructor(){
        super();
        this.toDoName=""
        this.toDoTaskList=[]
    }
    addTask=()=>{
        this.toDoTaskList.push({
            title : this.title,
            description : this.description,
            color: this.color,
            date: this.date,
            check: this.checkgit 
        })
    }
}