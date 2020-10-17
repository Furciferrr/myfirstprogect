'use strict';
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','0');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    genres:[],
    privat: false,
    };
    let lastFilm = prompt('Один из последних просмотренных фильмов?');
    let rating = prompt('На сколько оцените его?');
    let lastFilm2 = prompt('Второй из последних просмотренных фильмов?');
    let rating2Film = prompt('На сколько оцените этот фильм?');
    personalMovieDB.movies[lastFilm] = rating;
    personalMovieDB.movies[lastFilm2] = rating2Film;
    console.log(personalMovieDB.movies);
    


     