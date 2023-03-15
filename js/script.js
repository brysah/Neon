const btnDrop = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

function openDrop(event){
    event.preventDefault();
    dropdown.classList.toggle('active');
}


btnDrop.addEventListener('click', openDrop);
btnDrop.addEventListener('mouseleave', openDrop);