let signUp =document.getElementById("btn");
let inputUsername =document.getElementById("userNameinput");
let Emailinput =document.getElementById("Emailinput");
let passwordinput =document.getElementById("passwordinput");
let Confirmpasswordinput =document.getElementById("Confirmpasswordinput");
// var login =document.getElementById("login");


var users;
if(localStorage.users !=null){
    users = JSON.parse(localStorage.users);
}else{
    var users=[];
}

inputUsername.onkeyup=function(){
            let re=/[0-9]/;
                    if(inputUsername.value === '' || inputUsername.value === null){
                        document.getElementById("un").innerHTML ="*Enter your name";
                        signUp.disabled ="true";
                    }else if(inputUsername.value.match(re)){
                        document.getElementById("un").innerHTML ="*Enter your name string";
                        signUp.disabled ="true";
                    }else{
                        document.getElementById("un").innerHTML ="";
                        signUp.removeAttribute("disabled")
                    }
}
Emailinput.onkeyup=function(){
    if(Emailinput.value === '' || Emailinput.value === null){
                    document.getElementById("em").innerHTML ="*Enter your email";
                }else if(!Emailinput.value.includes("@")){
                    document.getElementById("em").innerHTML ="*Email not valid";
                    
                }else{
                    document.getElementById("em").innerHTML ="";
                    
                }
}
passwordinput.onkeyup=function(){
    if(passwordinput.value === '' || passwordinput.value === null){
                    document.getElementById("pass").innerHTML ="*Enter your password";
                    
                }else if(passwordinput.value.length < 6 ){
                    document.getElementById("pass").innerHTML ="*password must be greater than 6 numbers";
                }else{
                    document.getElementById("pass").innerHTML ="";
                }
}

Confirmpasswordinput.onkeyup=function(){
                if(Confirmpasswordinput.value === '' || Confirmpasswordinput.value === null){
                    document.getElementById("cpass").innerHTML ="*Enter your Confirm password";
                }else if(Confirmpasswordinput.value.trim() !== passwordinput.value.trim() ){
                    document.getElementById("cpass").innerHTML ="*password must be confirm";
                }else if(Confirmpasswordinput.length < 6 ){
                    document.getElementById("cpass").innerHTML ="*password must be greater than 6 numbers";
                }else{
                    document.getElementById("cpass").innerHTML ="";
                }
}


signUp.onclick=function(){
    createData();

}

function createData(){
    if( inputUsername.value && Emailinput.value &&passwordinput.value !=''){

        var user={
            userName : inputUsername.value,
            email : Emailinput.value,
            password : passwordinput.value,
        }
        users.push(user);
        localStorage.setItem('users' , JSON.stringify(users));
        // alert("successed");
        location.href="../html/login.html";
    }else{
        alert("please Enter Your Data");
    }
}

