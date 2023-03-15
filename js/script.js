const btnDrop = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

function openDrop(event){
    event.preventDefault();
    dropdown.classList.toggle('active');
}


btnDrop.addEventListener('click', openDrop);
btnDrop.addEventListener('mouseleave', openDrop);

const header = document.getElementById('js-header');


function fixedMenu(){
    if(window.pageYOffset > 80){
        header.classList.add('fixed-menu');
    }else{
        header.classList.remove('fixed-menu');
    }
}

document.addEventListener('scroll',fixedMenu);

const btnMenu = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openMobileMenu(){
    document.documentElement.classList.toggle('menu-opened');
}

btnMenu.addEventListener('click',openMobileMenu);
overlayMenu.addEventListener('click',openMobileMenu);