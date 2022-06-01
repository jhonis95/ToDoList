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
                projectImg.style.background=`linear-gradient(to bottom, rgba(255,255,255,0),rgba(0,0,0,1)),url('/style/img/projectImg.png')`
                break;
            case this.currentPosition===2:
                aboutProject.textContent=this.funcEditDelete.function+"\n"+this.funcEditDelete.content
                projectImg.style.background=`linear-gradient(to bottom, rgba(255,255,255,0),rgba(0,0,0,1)),url('/style/img/funcEditDelete.png')`
                break;
            case this.currentPosition===3:
                aboutProject.textContent=this.funcCreateTask.function+"\n"+this.funcCreateTask.content
                projectImg.style.background=`linear-gradient(to bottom, rgba(255,255,255,0),rgba(0,0,0,1)),url('/style/img/funcCreateTask.png')`
                break;
            default:
                break;
        }
    }
    goRository=()=>{
        location.href="https://github.com/jhonis95/ToDoList"
    }
}
const projecCard=new card
moreRight.addEventListener('click',projecCard.goToRigt)
moreLeft.addEventListener('click',projecCard.goToLeft)

goToRository.addEventListener('click',projecCard.goRository)

devDescription.textContent=`
Estudar para me tornar programador me fez criar uma paixão por produtividade e otimização.
Eu acredito que podemos sempre fazer as coisas melhores, não só no trabalho como também nas coisas do dia a dia,
acredito que por isso eu sou muito aberto para aprender e para ouvir críticas que vão me ajudar a melhorar.
`
devDescription2.textContent+=`No Tempo que estudei fora do Brasil tive a oportunidade não só de aprender novas línguas, mas como também a conviver com pessoas de culturas diferentes que me fizeram ter uma mente mais aberta e um maior respeito ao próximo.
Para o Futuro, me vejo trabalhando como desenvolvedor full stack ajudando aqueles que estão começando no desenvolvimento Web a criar grandes coisas.`

aboutProject.textContent= projecCard.aboutPj.content