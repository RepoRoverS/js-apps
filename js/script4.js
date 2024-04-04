'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const firstAnswer = prompt('Один из последних просмотреных фильмов?', ''),
	secondAnswer = prompt('На сколько вы его оцените?', ''),
	thirdAnswer = prompt('Один из последних просмотреных фильмов?', ''),
	fourthAnswer = prompt('На сколько вы его оцените?', '');


personalMovieDB.movies[firstAnswer] = secondAnswer;
personalMovieDB.movies[thirdAnswer] = fourthAnswer;
console.log(personalMovieDB);