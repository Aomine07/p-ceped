var _a;
(_a = document.getElementById('login-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
   
    if (username === 'admin' && password === 'password') {
        showSuccessMessage('Bem-vindo, ' + username + '!');
    }
    else {
        showErrorMessage('Usuário ou senha inválidos.');
    }
});
function showSuccessMessage(message) {
    var errorMessageElement = document.getElementById('error-message');
    if (errorMessageElement) {
        errorMessageElement.textContent = message;
        errorMessageElement.style.color = 'green';
    }
}
function showErrorMessage(message) {
    var errorMessageElement = document.getElementById('error-message');
    if (errorMessageElement) {
        errorMessageElement.textContent = message;
        errorMessageElement.style.color = 'red';
    }
}
