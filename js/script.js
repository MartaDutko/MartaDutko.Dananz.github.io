document.querySelector(`.menu-btn`).addEventListener(`click`,()=>{
    document.querySelector(`body`).classList.toggle(`active`)
})

// menu
// home
document.getElementById(`home`).addEventListener(`click`,()=>{
    window.location.href=`/MartaDutko.Dananz.github.io/index.html`
})
// about Us
document.getElementById(`aboytUs`).addEventListener(`click`,()=>{
    window.location.href=`/MartaDutko.Dananz.github.io/aboutUs.html`
})
// services
document.getElementById(`services`).addEventListener(`click`,()=>{
    window.location.href=`/MartaDutko.Dananz.github.io/services.html`
})
// our trem
document.getElementById(`teams`).addEventListener(`click`,()=>{
    window.location.href=`/MartaDutko.Dananz.github.io/teams.html`
})
// portfolio
document.getElementById(`portfolio`).addEventListener(`click`,()=>{
    window.location.href=`/MartaDutko.Dananz.github.io/portfolios.html`
})

function contact(){
    window.location.href=`/MartaDutko.Dananz.github.io/contact.html`
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
