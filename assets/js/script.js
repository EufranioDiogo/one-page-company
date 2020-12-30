//Animação menu responsivo
const openMobileMenuButton = document.querySelector('btn-menu-mobile');
const closeMobileMenuButton = document.querySelector('btn-close-mobile');
let buttonCloseVisible = false;

$('.btn-close-mobile').hide();
$('.menu').hide();

$('.btn-menu-mobile, .btn-close-mobile').on('click', function () {
    $('.menu').slideToggle('slow');

    if (buttonCloseVisible == false) {
        buttonCloseVisible = true;
        $('.btn-close-mobile').show();
    } else {
        buttonCloseVisible = false;
        $('.btn-close-mobile').hide();
    }
});

$('.menu__link').click(function () {
    $('.menu').hide();
});

const screenSize = window.screen.width;

if(screenSize > 765) {
    const menu = document.querySelector('.header__top-part');
    const menuItens = document.querySelectorAll('.menu__link')
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
    
    window.onscroll = function() {
        scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
        if (scrollPos < 100) {
            menu.style.position = 'static';
            menu.style.backgroundColor = 'transparent';
            
            for(let i = 0; i < menuItens.length - 1; i++) {
                if (menuItens[i].classList.contains('menu-link_after-bar-purple')) {
                    menuItens[i].classList.add('menu-link_after-bar-withe');
                    menuItens[i].classList.remove('menu-link_after-bar-purple');
                }
                menuItens[i].style.color = '#ffffffc8';
            }
            menuItens[menuItens.length - 1].style.color = '#7d76f8';
            menuItens[menuItens.length - 1].style.backgroundColor = '#fff';
        } else {
            menu.style.position = 'fixed';
            menu.style.backgroundColor = '#fffffff0';

            for(let i = 0; i < menuItens.length - 1; i++) {
                menuItens[i].style.color = '#7d76f8';
                if (menuItens[i].classList.contains('menu-link_after-bar-withe')) {
                    menuItens[i].classList.remove('menu-link_after-bar-withe');
                    menuItens[i].classList.add('menu-link_after-bar-purple');
                }
            }

            menuItens[menuItens.length - 1].style.color = '#fff';
            menuItens[menuItens.length - 1].style.backgroundColor = '#7d76f8';
        }
    }
    
}