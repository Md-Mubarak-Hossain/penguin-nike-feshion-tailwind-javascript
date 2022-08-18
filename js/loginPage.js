
document.getElementById('login-page').addEventListener('click', function () {
    // console.log('buy- page');
    // window.location.href = 'buy.html';
    const email = document.getElementById('text-field');
    const pass = document.getElementById('password-field');

    if (email.value === 'mubarak@dev.com' && pass.value === 'secret123') {
        window.location.href = 'buy.html';
    }
    else if (email.value === 'mubarak@dev.com' || pass.value === 'secret123') {
        // window.location.href = 'buy.html';
        if (email.value !== 'mubarak@dev.com') {
            email.value = '';
            alert(' Enter your correct email id')
        }
        else {
            pass.value = '';
            alert('Enter correct password')
        }
        // console.log("paisi product");
    }
    else {
        email.value = '';
        pass.value = '';
        alert('Your email and passwor is not valid or longer use');
    }
})

document.getElementById('cancel').addEventListener('click', function () {
    window.location.href = 'index.html';
    // console.log('log-out');

})
// password check
