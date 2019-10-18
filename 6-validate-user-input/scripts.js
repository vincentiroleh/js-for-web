const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');


errorMsg.classList.add('hideMessage');

confirmPassword.addEventListener('blur', () => {
    if (passwordInput.value === confirmPassword.value) {
        passwordInput.classList.add('passwordMatchBorder');
        confirmPassword.classList.add('passwordMatchBorder');
        errorMsg.classList.add('hideMessage');
    } else {
        passwordInput.classList.add('passwordNotMatchBorder');
        confirmPassword.classList.add('passwordNotMatchBorder');
        errorMsg.classList.add('showErrorMessage');

    }
});