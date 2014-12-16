var data = [
  { 'title' : 'Чтоб' , 'subtitle' : 'Мечты Сбывались' , 'url' : '/images/happy_birthday_dear_pasha/P1080067.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080067.JPG' },
  { 'title' : 'С Днем Рождения' , 'subtitle' : 'Дорогой Друг' , 'url' : '/images/happy_birthday_dear_pasha/P1080006.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080006.JPG' },
  { 'title' : 'Мало' , 'subtitle' : 'Работы' , 'url' : '/images/happy_birthday_dear_pasha/P1080057.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080057.JPG' },
  { 'title' : 'Рости' , 'subtitle' : 'Большой' , 'url' : '/images/happy_birthday_dear_pasha/P1080021.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080021.JPG' },
  { 'title' : 'Чувак,' , 'subtitle' : 'С Днем Варенья' , 'url' : '/images/happy_birthday_dear_pasha/P1080018.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080018.JPG' },
  { 'title' : 'Happy Birthday' , 'subtitle' : 'Dear Friend' , 'url' : '/images/happy_birthday_dear_pasha/P1080012.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080012.JPG' },
  { 'title' : 'Высоких' , 'subtitle' : 'Гор' , 'url' : '/images/happy_birthday_dear_pasha/P1080060.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080060.JPG' },
  { 'title' : 'Χρόνια Πολλά' , 'subtitle' : 'αγαπητέ φίλε' , 'url' : '/images/happy_birthday_dear_pasha/P1080017.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080017.JPG' },
  { 'title' : 'Йо,' , 'subtitle' : 'С Днюхой' , 'url' : '/images/happy_birthday_dear_pasha/P1080019.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080019.JPG' },
  { 'title' : 'Много' , 'subtitle' : 'Денег :)' , 'url' : '/images/happy_birthday_dear_pasha/P1080039.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080039.JPG' },
  { 'title' : 'Всего' , 'subtitle' : 'Хорошего' , 'url' : '/images/happy_birthday_dear_pasha/P1080026.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080026.JPG' },
  { 'title' : 'Здоровья' , 'subtitle' : 'и Любви' , 'url' : '/images/happy_birthday_dear_pasha/P1080028.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080028.JPG' },
  { 'title' : 'Гречки и' , 'subtitle' : 'Грецких Орехов' , 'url' : '/images/happy_birthday_dear_pasha/P1080063.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080063.JPG' },
  { 'title' : 'Счастья' , 'subtitle' : 'и Удачи' , 'url' : '/images/happy_birthday_dear_pasha/P1080038.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080038.JPG' },
  { 'title' : 'Не будь' , 'subtitle' : 'Лапшой' , 'url' : '/images/happy_birthday_dear_pasha/P1080025.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080025.JPG' },
  { 'title' : 'З Днем Нарождення' , 'subtitle' : 'Дорогий Друг' , 'url' : '/images/happy_birthday_dear_pasha/P1080007.JPG' , 'img' :  '/images/happy_birthday_dear_pasha/P1080007.JPG' },
];

(function ( $ ) {

  $('#photocols').photocols({

    bgcolor : '#333', // background color of your photo wall
    width : 'auto', // width
    colswidth : '350', // column width
    height : 800, // height
    itemheight : 250,
    gap : 2, // space bewteen images
    // titleSize : 16,
    // subtitleSize : 14,
    overlayColor : '#000',
    opacity : 0.5, // opacity
    stopOnHover : true,
    data: data});

}( jQuery ));
