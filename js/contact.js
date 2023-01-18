// first name
let regExpName = /^[A-Z,a-z,а-я,А-Я][a-z,а-я]{2,20}$/;
let firstName = document.getElementById(`first-name`);
firstName.onchange = () => {
    let testFirstName = regExpName.test(firstName.value);
    if (testFirstName) {
        firstName.style.border = '0.5px solid green'
    }
    else {
        firstName.style.border = '0.5px solid red'
    }
}

// last name
let regExpLastName = /^[A-Z,a-z,а-я,А-Я][a-z,а-я]{2,20}$/;
let lastName = document.getElementById(`last-name`);
lastName.onchange = () => {
    let testLastName = regExpLastName.test(lastName.value);
    if (testLastName) {
        lastName.style.border = '0.5px solid green'
    }
    else {
        lastName.style.border = '0.5px solid red'
    }
}

// email
let regExpEmailUser = /^([a-z0-9]+\.)*[a-z0-9]+@[a-z0-9]+(\.[a-z0-9]+)*\.[a-z]{2,6}$/;
let emailUser = document.getElementById(`email-user`);
emailUser.onchange = () => {
    let testEmail = regExpEmailUser.test(emailUser.value);
    if (testEmail) {
        emailUser.style.border = '0.5px solid green';
    }
    else {
        emailUser.style.border = '0.5px solid red';
    }
}
// number
let regExpPassword = /^0\d{9}/
let number = document.getElementById(`number`);
number.onchange = () => {
    let testNumber = regExpPassword.test(number.value);
    console.log(number.value)
    if (testNumber) {
        number.style.border = '0.5px solid green';
    }
    else {
        number.style.border = '0.5px solid red'
    }
}
