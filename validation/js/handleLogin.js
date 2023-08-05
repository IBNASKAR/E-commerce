var login =document.getElementById("login");
var EmailLogin =document.getElementById("EmailLogin");
var PasswordLogin =document.getElementById("PasswordLogin");


var users;
if(localStorage.users !=null){
    users = JSON.parse(localStorage.users);
}else{
    var users=[];
}

EmailLogin.onkeyup=function(){
    if(EmailLogin.value ===''){
        document.getElementById("error").innerHTML = "* please Enter your Data";
    }else{
        document.getElementById("error").innerHTML = "";
        return true;
    }
}
PasswordLogin.onkeyup=function(){
    if(PasswordLogin.value ===''){
        document.getElementById("error").innerHTML = "* please Enter your Data";
    }else{
        document.getElementById("error").innerHTML = "";
        return true;
    }
}


function checkUser(){
    for(var i =0 ;i <users.length ; i++){
        if(users[i].email === EmailLogin.value && users[i].password === PasswordLogin.value ){
            // alert("done");
            localStorage.setItem("sessionusername" ,users[i].userName);
            location.href="../";
            document.getElementById("error").style.color="green";
            document.getElementById("error").innerHTML= "Done";
        }else{
                document.getElementById("error").innerHTML= "*incorrect email or password";
        }
    }

}

login.onclick=function(){
    checkUser();
}