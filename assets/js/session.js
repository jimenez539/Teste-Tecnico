function iniciarSesion() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let date = new Date();
    let dadoSession = {
        email: email,
        password: password,
    }
    if(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)){
    
    }else {
        alert("Você deve inserir um email válido.");
        return 
    }
    if(password.length <= 5){
        alert('Sua senha deve ter mais de 5 caracteres');
        return 
    }
    window.location.href="result.html"
    sessionStorage.setItem("session", JSON.stringify(dadoSession));
}

