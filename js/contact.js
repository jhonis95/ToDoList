let contact=document.getElementsByClassName("social-media")
const APIURL = 'https://api.github.com/users/'
const githubUser = 'jhonis95'

class socialMedia{
    constructor(icon,socialMedia,userName){
        this.icon=icon,
        this.socialMedia=socialMedia,
        this.userName=userName
    }
}
getUserGithub()
async function getUserGithub(){
    try{
        const {data}=await axios(APIURL+githubUser)
        console.log(data)
        console.log("iniciou")
    }catch(err){
        if(err.response.status==404){
            alert('No profile with this user name')
        }
    }
}
let socialMedias=[]
function getSocialMedia(data){
    socialMedias= new socialMedia(data.avatar_url,"",data.name)
}