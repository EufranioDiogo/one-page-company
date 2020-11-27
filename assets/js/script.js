//Animação menu responsivo
$('.btn-menu, .btn-close').on('click', function () {
    $('.menu').slideToggle('slow');
});

$('nav ul li').click(function () {
    $('.menu').hide();
});