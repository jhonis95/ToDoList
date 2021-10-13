const addTaskBtn= document.getElementsByClassName("addBtn");
const taskContainer=document.getElementsByClassName("taskList");
addTaskBtn.onClick= function addTask(taskContainer){
    const newTask=document.createElement("p");
    taskContainer.apperchild(newTask);
    newTask.textContent="new task"
};