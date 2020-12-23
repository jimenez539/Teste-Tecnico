function iniciarSesion() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let dadoSession = {
        email: email,
        password: password,
    }
    validateEmail(email);
    validatePass(password);

    if(email != '' && password != ''){
        window.location.href="result.html"
        sessionStorage.setItem("session", JSON.stringify(dadoSession));
    }  
}

function validateEmail(){
    if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(document.getElementById('email').value)){
    }else {
        alert("Você deve inserir um email válido.");  
    }
}

function validatePass(){
    var password = document.getElementById("password").value;
    console.log(password)
    if(password === "" || password.length <= 5){
        document.getElementById("myBtn").disabled = false;
        alert('Sua senha deve ter mais de 5 caracteres'); 
    }else{
        document.getElementById("myBtn").className="btn-primary btn btn-block btn-large"
    }
}

