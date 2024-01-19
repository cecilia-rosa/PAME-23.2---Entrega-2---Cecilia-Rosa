
function botaoSignIn() {

    // obtem valores dos inputs
    var email = document.getElementById('nome_email').value;
    var senha = document.getElementById('senha').value;
    var lembrar = document.getElementById('remember-checkbox').checked;

    // exibe alerta com as informacoes inseridas
    alert("Username ou email: " + email + "\nPassword: " + senha + "\nRemember me: " + lembrar);



    // cria estrutura de texto HTML
    var confirmacaoHTML = "<h2>Login Confirmado</h2>";
    confirmacaoHTML += "<p>Email: " + email + "</p>";
    confirmacaoHTML += "<p>Senha: " + senha + "</p>";
    confirmacaoHTML += "<p>Lembrar de mim: " + (lembrar ? "Sim" : "Não") + "</p>";

    // insere a estrutura HTML após o formulário
    var confirmationContainer = document.createElement('div');
    confirmationContainer.innerHTML = confirmacaoHTML;


    document.getElementById('formulario').insertAdjacentElement('afterend', confirmationContainer);
}





