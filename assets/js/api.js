document.onreadystatechange = function (){
    if(document.readyState === 'complete'){
        getDados()
        timeSession()
    }    
}

function getDados(){
    fetch('http://www.mocky.io/v2/5dba68fb3000007400028eb5')
    .then(res => res.json())
    .then(data => { 
        let dados = document.querySelector('#caixa-dados');
        dados.innerHTML = ''
        for(let item of data) {
            dados.innerHTML += `<li><img class="avatar" src="${item.avatar_url}" alt="">  <span class="nome">${item.login}</span><div>`
        }
    })
}

function timeSession(){
    let dadoSession = sessionStorage.getItem("session");
    setTimeout(function(){ 
        sessionStorage.clear()
    }, 5 * 60 * 1000);
    console.log(sessionStorage);
    if(sessionStorage.length == 0){
      window.location.href="index.html"
    }
}

