'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false

};

const a = prompt('Один из последних просмотренных фильмов?', ''),
	b = prompt('На сколько оцените его?', ''),
	с = prompt('Один из последних просмотренных фильмов?', ''),
	d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[с] = d;


console.log(personalMovieDB);

// Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли

// console.log('arr' + '- object');
// console.log(4 + +'5');

// let incr = 10,
// 	decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);
// console.log(5%2);

// console.log(2*5===8);

// const isChecked = true,
// 	isClose = true;

// console.log(isChecked || !isClose);

//==================//
// && оператор "і"
// || оператор "або"
//==================//
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5/10`);

// const user = 'Ivan';

// alert(`Hello, ${user}`);

// =========================================//
// // const result = confirm('Are you here?');

// // console.log(result);

// const answer = prompt('have you got 18?', '18');

// // console.log((+answer + 5));

// const answers = [];

// // answers[0] = prompt('What is your name', '');
// // answers[1] = prompt('How old are you', '');
// // answers[2] = prompt('Where fo you live', '');

// console.log(typeof(answers));
// ==============================================================
// const arr = ['a', 'b', 'c'];

// const arrObj = {
// 	a: 'a',
// 	'1': 'b',
// 	2: 'c',
// 	abc: {}
// };
// let b = 'b';

// arrObj[b]= '1234'; //нова властивість в об'єкт але це не маэ бути змінна, яка ще не об'явлена

// console.log(arrObj[b]);   // через крапку може бути тільки "строка" через [] може бути
// // const obj = {a: 1, b: 2};

// const obj = {
// 	Anna: 500,
// 	Alice: 800,
// };
// 'use strict';

// let number = 4.6;

// console.log(-4/0);

// console.log('string' * 9);

// const person = 'Alex';

// let und;
// console.log(und);

// const obj = {
// 	name: 'John',
// 	age: 25,
// 	isMarried: false
// };

// // console.log(obj.name);

// console.log(obj['name']);

// let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
// console.log(arr[2]);
