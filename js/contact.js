const contact=document.getElementById("social-media-list")

class socialMedia{
    constructor(icon,socialMedia,description,link){
        this.icon=icon,
        this.socialMedia=socialMedia,
        this.description=description
        this.link=link
    }
    renderSM(){
        let icon=document.createElement('img')
        let socialMedia=document.createElement('h3')
        let description=document.createElement('h4')
        let SM=document.createElement('li')
        // let line=document.createElement('div')
        contact.appendChild(SM) //erro here contact is a class no a id

        SM.appendChild(icon)
        SM.appendChild(socialMedia)
        SM.appendChild(description)
        
        SM.className="socialMedia"

        icon.src=this.icon
        icon.alt=`${this.socialMedia}Icon`
        icon.className="sm-icon"

        socialMedia.className="sm-name"
        socialMedia.innerText=this.socialMedia

        description.className="sm-description"
        description.innerText=this.description

        SM.addEventListener('click',this.goToLink)
    }
    goToLink=()=>{
        console.log("hi link is:"+this.link)
        location.href=this.link//sende user to social media page
    }
}
let socialMediaList=[]
socialMediaList.push(new socialMedia("https://cdn-icons-png.flaticon.com/512/733/733609.png","GitHub","here your can see more about what i had been doing ","https://github.com/jhonis95"))
socialMediaList.push(new socialMedia("https://cdn-icons-png.flaticon.com/512/145/145807.png","LinkedIn","my profissional path and my conections","https://www.linkedin.com/in/jonatan-de-oliveira-4452bb209/"))
socialMediaList.push(new socialMedia("https://cdn-icons.flaticon.com/png/512/3670/premium/3670151.png?token=exp=1653270960~hmac=2baabfc793ac4010b1d98606946d53d1","Twitter","here you can see more about me outside work","https://twitter.com/JJhonis95"))
for(let task of socialMediaList){
    task.renderSM()
}


