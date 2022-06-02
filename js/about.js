const devDescription=document.getElementById("devDescription")
const devDescription2=document.getElementById("devDescription2")
const aboutProject=document.getElementById("aboutProject")

const projectImg=document.getElementById("projectImg")
const goToRository=document.getElementById("goToRository")

const moreRight=document.getElementById("goToRight")
const moreLeft=document.getElementById("goToLeft")

//setting the about project card content
class card{
    currentPosition=1
    position=[1,2,3]
    aboutPj={
        content:'Esse projeto é para testar minhas habilidades em manipulação do DOM, é um simples To Do List que permite o usuário separar suas tarefas em etiquetas para melhor organização dos seus afazeres. Essa aplicação web permite:',
    }
    funcEditDelete={
        function:'Editar e deletar as etiquetas',
        content:`User is allow to edit the labels and delete if is need` 
    }
    funcCreateTask={
        function:'Creating Tasks',
        content:
        `When you create a task you can add not just the task but a small
         description, pick a color to your task and add a date to do the task`
    }
    goToRigt=()=>{
        if(this.currentPosition===3){
            return
        }else{
            this.currentPosition=this.currentPosition+1
            this.render()
        }
    }
    goToLeft=()=>{
        if(this.currentPosition===1){
            return
        }else{
            this.currentPosition=this.currentPosition-1;
            this.render()
        }
    }
    render=()=>{
        switch(true){
            case this.currentPosition===1:
                aboutProject.textContent=this.aboutPj.content
                projectImg.className='projectImg'
                break;
            case this.currentPosition===2:
                aboutProject.textContent=this.funcEditDelete.function+"\n"+this.funcEditDelete.content
                projectImg.classList='funcEditDelete'
                break;
            case this.currentPosition===3:
                aboutProject.textContent=this.funcCreateTask.function+"\n"+this.funcCreateTask.content
                projectImg.className='funcCreateTask'
                break;
            default:
                break;
        }
    }
    goRepository=()=>{
        window.open('https://github.com/jhonis95/ToDoList')
    }
}
const projecCard=new card
moreRight.addEventListener('click',projecCard.goToRigt)
moreLeft.addEventListener('click',projecCard.goToLeft)

goToRository.addEventListener('click',projecCard.goRepository)

devDescription.textContent=`
Studying to become a programmer made me develop a passion for productivity and optimization.
I believe that we can always make things better, not only at work but also in everyday things,
I believe that's why I'm very open to learn and to hear criticism that will help me improve.
`
devDescription2.textContent+=`
During the time I studied outside Brazil, I had the opportunity not only to learn new languages, but also to live with people from different cultures that made me have a more open mind and greater respect for others.
For the future, I see myself working as a full stack developer helping those new to web development to create great things.`

aboutProject.textContent= projecCard.aboutPj.content