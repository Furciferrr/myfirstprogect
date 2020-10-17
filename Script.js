'use strict';
let numberOfFilms;
function start () {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','0');
    }
}
start ();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    genres:[],
    privat: false,
    };

    

   function rememberMyFilms () {
    for (let i = 1; i < 3; i++){
        let lastFilm = prompt('Один из последних просмотренных фильмов?'),
            rating = prompt('На сколько оцените его?');
            if (lastFilm != null && rating !=null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
               personalMovieDB.movies[lastFilm] = rating;
               console.log('done');
            } else {
               console.log('error');
               i--;
            }     
   }
   }

   rememberMyFilms();



   function detectPeronaLevel () {
    if (personalMovieDB.count < 10) {
        alert('Очень мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert('Вы класный зритель');
    } else if (personalMovieDB.count > 30){
        alert ('да вы красавчик!');
    } else {
        alert ('произошла ошибка');
    }
   }

   detectPeronaLevel();
   
   function showMyDB () {
       if (personalMovieDB.privat == false){
           console.log(personalMovieDB);
       }
   }
   

   function writeYourGeneres () {
        for (let i = 1; i < 4; i++) {
        let a = prompt(`Ваш любимый жанр по номером ${i}?`);
        personalMovieDB.genres.push(a);
        }
   }
   writeYourGeneres ();
   showMyDB ();