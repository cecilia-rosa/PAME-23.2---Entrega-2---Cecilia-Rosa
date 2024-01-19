function botaoSignIn() {
    // Obter valores dos campos
    var email = document.getElementById('nome_email').value;
    var senha = document.getElementById('senha').value;
    var lembrar = document.getElementById('remember-checkbox').checked;

    // Exibir alerta com as informações
    alert("Username ou email: " + email + "\nPassword: " + senha + "\nRemember me: " + lembrar);

    var confirmacaoHTML = "<h2>Login Confirmado</h2>";
    confirmacaoHTML += "<p>Email: " + email + "</p>";
    confirmacaoHTML += "<p>Senha: " + senha + "</p>";
    confirmacaoHTML += "<p>Lembrar de mim: " + (lembrar ? "Sim" : "Não") + "</p>";

    // Criar um elemento div para a estrutura HTML
    var confirmationContainer = document.createElement('div');
    confirmationContainer.innerHTML = confirmacaoHTML;

    // Inserir a estrutura HTML após o formulário
    var formElement = document.getElementById('loginForm');
    formElement.parentNode.insertBefore(confirmationContainer, formElement.nextSibling);
}



