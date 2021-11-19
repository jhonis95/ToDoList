const addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',addTask)

let myToDo= [];//array that have all the task

function addTask(){
    let inputValue=document.getElementById("newTask").value;//variable that have the value of the input
    
    //creacting the task object
    let task= {
        check: false,
        value: inputValue
    };
    myToDo.push(task)//pushing the task to array myToDo[]
    
    renderTask();
};
function renderTask(){
    //make the container clean to render a new list
    let taskListContainer=document.getElementById("taskList")//div with the todo list
    let oldUl=document.getElementById("list")//getting the old ul id 
    let ul=document.createElement("ul")//creating new ul
    
    taskListContainer.replaceChild(ul,oldUl)//replacing the old ul for a new one
    ul.id="list"//setting new ul to oldUl id to list in that way we dont have problem to reuse the render function
    //make list show in the DOM
    for(let i=0;i<myToDo.length;i++){
        let text=document.createTextNode(myToDo[i].value)
        let li=document.createElement("li")
        let input=document.createElement("input")
        
        input.type="checkbox"
        input.id=`${i}`
        input.className="taskCheckBox"
        
        if(myToDo[i].check===true){
            input.checked=true
        }else{
            input.checked=false
        }
        
        ul.appendChild(li)
        li.appendChild(input)
        li.appendChild(text)
    }
    
    document.getElementById("newTask").value = "";//to clean the label after submit
}
const liClass=document.getElementsByClassName('taskCheckBox')
for(i=0;i<liClass.length;i++){
    liClass[i].addEventListener('change',inputCheck(liClass[i].id))
}
// const classID=document.querySelector('.taskCheckBox').id
// parseInt(classID)
// inputLi.addEventListener('click',inputCheck(this.id))
function inputCheck(id){
    console.log("ativou o click")
    // console.log(alert)
    // let task=document.getElementById(id)
    
    // if(task.checkValidity()!=myToDo[id].check){
    //     myToDo[id].check=true
    // }else{
    //     myToDo[id].check=false
    // }
}
//Router 