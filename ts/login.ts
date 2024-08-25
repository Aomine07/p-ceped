document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Apenas um exemplo simplificado.
    if (username === 'admin' && password === 'password') {
        showSuccessMessage('Bem-vindo, ' + username + '!');
    } else {
        showErrorMessage('Usuário ou senha inválidos.');
    }
});

function showSuccessMessage(message: string) {
    const errorMessageElement = document.getElementById('error-message');
    if (errorMessageElement) {
        errorMessageElement.textContent = message;
        errorMessageElement.style.color = 'green';
    }
}

function showErrorMessage(message: string) {
    const errorMessageElement = document.getElementById('error-message');
    if (errorMessageElement) {
        errorMessageElement.textContent = message;
        errorMessageElement.style.color = 'red';
    }
}






