//marca que o remember me foi acionado

function botaoRememberMe (){
    var remember = true
    return remember
}

//alerta com os dados apos botao sign in ser clicado
function botaoSignIn(){
    var nomeEmailInput = document.getElementById("nome_email");
    var senhaInput = document.getElementById("senha");
    var nomeEmailValue = nomeEmailInput.value;
    var senhaValue = senhaInput.value;
    var lembrar = remember
    if (lembrar==true){
        return alert("Username or Email: " + nomeEmailValue + "\nPassword: " + senhaValue + "\nLembrar:sim");
    }
    else if (lembrar!=true){
        return alert("Username or Email: " + nomeEmailValue + "\nPassword: " + senhaValue + "\nLembrar:nao");
    }
}

