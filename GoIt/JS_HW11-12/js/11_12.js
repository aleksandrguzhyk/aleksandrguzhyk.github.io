// Part 1 - Слайдер

$(function() {
  $('.carousel-hider').slider();
});

//Part2 - Шаблонизатор

$(function () {

var html = $('#page').html();

var myProfile = [
  {
    title: 'Гужик Александр Михайлович',
    content: 'менеджер по продаже авиабилетов'
  },
  {
    title: 'Хочу учить фронтенд, потому что:',
    reason1: 'Достиг самых высот в своей отрасли, дальше уже неинстересно',
    reason2: 'Всегда нравилось "возится" с сайтами',
    reason3: 'Хочу поработать в крупной айти компании'
  },
  {
    title: 'Мой контактный телефон',
    content: '+380679466807'
  },
  {
    title: 'Мой профайл в Facebook',
    link: 'facebook.com/oleksandr.guzhyk'
  }
];

var content = tmpl(html, {
  data: myProfile
});

$('.profile').append(content);
});
