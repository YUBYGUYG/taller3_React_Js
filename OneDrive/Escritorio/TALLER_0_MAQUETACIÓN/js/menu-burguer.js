const burguer = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');

burguer.addEventListener('click', ()=>{
    menu.classList.toggle("menucito")
})

window.addEventListener('click', e=>{
    if (menu.classList.contains('menucito') && e.target != menu && e.target != burguer) {
        menu.classList.toggle("menucito")
    }
})

