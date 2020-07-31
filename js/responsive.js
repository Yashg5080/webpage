burger=document.querySelector('.burger')
navul=document.querySelector('.nav-ul')
secnav=document.querySelector('.second-nav')
navbar=document.querySelector('.nav-bar')
burger.addEventListener('click',() =>{
    navul.classList.toggle('disp');
    secnav.classList.toggle('btnin');
    navbar.classList.toggle('nav1');
}
)