document.querySelector(`.menu-btn`).addEventListener(`click`,()=>{
    document.querySelector(`body`).classList.toggle(`active`)
})

// menu
// home
document.getElementById(`home`).addEventListener(`click`,()=>{
    window.location.href=`/index.html`
})
// about Us
document.getElementById(`aboytUs`).addEventListener(`click`,()=>{
    window.location.href=`/aboutUs.html`
})
// services
document.getElementById(`services`).addEventListener(`click`,()=>{
    window.location.href=`/services.html`
})
// our trem
document.getElementById(`teams`).addEventListener(`click`,()=>{
    window.location.href=`/teams.html`
})
// portfolio
document.getElementById(`portfolio`).addEventListener(`click`,()=>{
    window.location.href=`/portfolios.html`
})

function contact(){
    window.location.href=`/contact.html`
}

// email footer valid
let regExpEmail = /^([a-z0-9]+\.)*[a-z0-9]+@[a-z0-9]+(\.[a-z0-9]+)*\.[a-z]{2,6}$/;
let email=document.getElementById(`email`);
email.onchange=()=>{
let testEmail=regExpEmail.test(email.value);
if(testEmail){
    email.style.borderBottom = '0.5px solid green';
}
else{
    email.style.borderBottom = '0.5px solid red';
}
}
