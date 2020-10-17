'use strict';


let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','0');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    genres:[],
    privat: false,
    };
    let i = 1;
    do {
        let lastFilm = prompt('Один из последних просмотренных фильмов?'),
            rating = prompt('На сколько оцените его?');
            i++;
            if (lastFilm != null && rating !=null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = rating;
                console.log('done');
             } else {
                console.log('error');
                i--;
             }
    }
    while (i < 3);
 /*  let i = 1;
  while (i < 3) {
    let lastFilm = prompt('Один из последних просмотренных фильмов?'),
    rating = prompt('На сколько оцените его?');
    i++;
    if (lastFilm != null && rating !=null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
       personalMovieDB.movies[lastFilm] = rating;
       console.log('done');
    } else {
       console.log('error');
       i--;
    }
  } */
    /* for (let i = 1; i < 3; i++){
         let lastFilm = prompt('Один из последних просмотренных фильмов?'),
             rating = prompt('На сколько оцените его?');
             if (lastFilm != null && rating !=null && lastFilm != '' && rating != '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = rating;
                console.log('done');
             } else {
                console.log('error');
                i--;
             }     
    } */

    if (personalMovieDB.count < 10) {
        alert('Очень мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        alert('Вы класный зритель');
    } else if (personalMovieDB.count > 30){
        alert ('да вы красавчик!');
    } else {
        alert ('произошла ошибка');
    }
    //let lastFilm = prompt('Один из последних просмотренных фильмов?'),
    //    rating = prompt('На сколько оцените его?');
    //let lastFilm2 = prompt('Второй из последних просмотренных фильмов?'),
    //    rating2Film = prompt('На сколько оцените этот фильм?');
    //personalMovieDB.movies[lastFilm] = rating;
    //personalMovieDB.movies[lastFilm2] = rating2Film;
    //console.log(personalMovieDB.movies);
