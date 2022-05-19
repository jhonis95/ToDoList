const contact=document.getElementsByClassName("social-media")
// const APIURL = 'https://api.github.com/users/'
// const githubUser = 'jhonis95'
class socialMedia{
    constructor(icon,socialMedia,userName){
        this.icon=icon,
        this.socialMedia=socialMedia,
        this.userName=userName
    }
    createSM=()=>{
        let icon=document.createElement('div')
        let socialMedia=document.createElement('h3')
        let userName=document.createElement('h4')
        let SM=document.createElement('li')
        contact.appendChild(SM)

        SM.appendChild(icon)
        SM.appendChild(socialMedia)
        SM.appendChild(userName)
        
        SM.className="socialMedia"

        icon.style.backgroundImage=`url(${this.icon})`
        icon.className="sm-icon"

        socialMedia.className="sm-name"
        socialMedia.innerText=this.socialMedia

        userName.className="sm-user"
        userName.innerText=this.userName
        console.log("creating SM")
    }
}
let contactME =new socialMedia("https://avatars.githubusercontent.com/jhonis95","GitHub","jhonis95")
contactME.createSM
