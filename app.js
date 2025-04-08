let id =""
let pass =""

function register(){
    id=document.getElementById("idUser").value;
    pass=document.getElementById("passUser").value;

    if(id && pass){
        alert("user added Succesfully")
    }else{
        alert("please fill fields")
    }
}
function login(){
    let userId=document.getElementById("idsave").value;
    let userPass=document.getElementById("passsave").value;

    if(userId =="" && userPass==""){
        alert("invalid")
    }
    else if(id === userId  && pass === userPass){
        alert("login Successfully")
    }else{
        alert("please add valid user")
    }
}