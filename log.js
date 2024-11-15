
function signup(){

    let usernamel=document.getElementById('email').value
    let password=document.getElementById('password').value

    let data=JSON.parse(localStorage.getItem("data")) || {}

    if(data.usernamel===usernamel){
        alert("User Already Exists!! Please Login")
       
    }
    else{
        let r={ usernamel:usernamel,password:password }

        localStorage.setItem("data",JSON.stringify(r))
     }   

}



function login(){

    let usernamel=document.getElementById('email').value
    let password=document.getElementById('password').value

    let data=JSON.parse(localStorage.getItem("data"))
    

    if(!data || data.usernamel!==usernamel){
        alert("User not found.Please SignUp first!!!")
        return false;
    }
    else if(data.password!==password){
        alert("Incorrect Password")
        return false;

    }

   


}



