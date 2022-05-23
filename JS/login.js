function LoginInicio(){
    var user, passw;
    user = document.getElementById("user").value;
    passw = document.getElementById("password").value;
    if(user == "admin" && passw == "admin"){
        window.location= "../crud_javascript_fetch/index.html";
        alert("Bienvenido.")
    }
    else{
        alert("Los datos ingresados son incorrectos.")
    }
}