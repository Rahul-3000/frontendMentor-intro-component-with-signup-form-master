const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    // e.preventDefault() will prevent form to submit again

    const firstName = form['first-name'].value;
    const lastName = form['last-name'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName == "") {
        add_error('first-name', 'First Name cannot be empty');
    }
    else {
        remove_error("first-name");
    }

    if (lastName == "") {
        add_error('last-name', 'Last Name cannot be empty');
    }
    else {
        remove_error("last-name");
    }

    if (!(validateEmail(email)) || email == '') {
        add_error('email', 'Looks like this is not an email');
        const place = form['email'].parentNode.querySelector('input');
        place.placeholder = "email@example/com";

    }
    else {
        remove_error("email");
    }
    if (password == "") {
        add_error('password', 'Password cannot be empty');
    }
    else {
        remove_error("password");
    }
    alert(first + last + email + password);
})

function add_error(field, message) {
    const form_control = form[field].parentNode;
    form_control.classList.add('error');

    const small = form_control.querySelector('small');
    small.innerText = message;
    small.style.display = 'block';
}

function remove_error(field) {
    const form_control = form[field].parentNode;
    form_control.classList.remove('error');
    const small = form_control.querySelector('small');

    small.style.display = 'none';
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// above validateEmail function is taken from stack over flow