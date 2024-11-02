let MenuControl = document.querySelector('.menu-control');

let MENU = document.getElementById('main-menu-box');

MenuControl.addEventListener('click', function(e) {

    if (e.target.classList.contains('fa-align-right')) {

        setTimeout(()=> e.target.parentElement.classList.add('switch'), 100)

        MENU.style.transform = 'translateX(0%)';

    } else {

        setTimeout(()=> e.target.parentElement.classList.remove('switch'), 100)

        MENU.style.transform = 'translateX(300%)';

    }

})

MENU.addEventListener('click', function(e) {

    if (e.target.tagName === 'A') {

        e.target.parentElement.parentElement.parentElement.style.transform = 'translateX(300%)';

        MenuControl.classList.remove('switch');

    }

})

window.addEventListener('click', function(e) {

        if (e.target.classList.contains('fa-align-right') !== true) {
            
            MENU.style.transform = 'translateX(300%)';

            MenuControl.classList.remove('switch');
            
        }

})

let date = document.getElementById('current-year');

let DATE = new Date();

date.innerHTML = DATE.getFullYear();

