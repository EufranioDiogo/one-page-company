//Animação menu responsivo
$('.btn-menu, .btn-close').on('click', function () {
    $('.menu').slideToggle('slow');
});

$('nav ul li').click(function () {
    $('.menu').hide();
});

const screenSize = window.screen.width;

if(screenSize > 765) {
    const menu = document.getElementById('menu-todo');
    const menuItens = document.querySelectorAll('#menu-todo .menu ul li a')
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    
    window.onscroll = function() {
        scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
        if (scrollPos < 100) {
            menu.style.position = 'static';
            menu.style.backgroundColor = 'transparent';
            
            for(let i = 0; i < menuItens.length - 1; i++) {
                menuItens[i].style.color = '#ffffffc8';
            }
            menuItens[menuItens.length - 1].style.color = '#7d76f8';
            menuItens[menuItens.length - 1].style.backgroundColor = '#fff';
        } else {
            menu.style.position = 'fixed';
            menu.style.backgroundColor = '#fffffff0';

            for(let i = 0; i < menuItens.length - 1; i++) {
                menuItens[i].style.color = '#7d76f8';
            }

            menuItens[menuItens.length - 1].style.color = '#fff';
            menuItens[menuItens.length - 1].style.backgroundColor = '#7d76f8';
        }
    }
    
}