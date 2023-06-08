
/* Ev tapşırığı:

1) Bütün reklam şəkillərini silin (saytın sağ tərəfində)

2) Filmin janrını "Komediya"-dan на "Drama" -ya dəyişin
Posterin arxa fon şəkilini "bg.jpg" ilə dəyişin. Şəkil "img" qovluğunda yerləşir. Bunun üçün ancaq JS-dən istifadə edin.

4) Baxılmış kinoların siyahısını JS ilə silin, əlifbaya görə sıralayın.

5) "movieDB"-də olan kino adları ilə əvəz edirik (stili HTML-dən götürün) və əlavə edilmiş kino adları nömrələnsin */

'use strict';

const movieDB = {
    movies: [
        "logan",
        "titanic",
        "Bəyin oğurlanması",
        "Xaç atası",
        "Avatar 2"
    ]
};

const reklam = document.querySelectorAll('.promo__adv img');
const janr = document.querySelector('.promo__genre');
const bgimage = document.querySelector('.promo__bg');
reklam.forEach(item => {
    item.remove();
});


janr.textContent = 'Morroun DRAMA WEPSITESI';

bgimage.style.backgroundimage = 'url(../img/bg.jpg)'




const kinolar = document.querySelectorAll('.promo__interactive-list');

kinolar.innerHTML ='';


movieDB.movies.sort();

kinolar.movieDB.forEach((kino , i) => {
kinolar.innerHTML  += `
<ul class="promo__interactive-list">${i+1}. ${kino}
 <li class="promo__interactive-item">LOGAN
      <div class="delete"></div>
    </li>

`
});










