'use strict';
// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Калькулятор, просто напиши число ы вын добавить 5', ''); // при виводі завжди тип данних строка
// console.log(answer + 5); // показує який тип данних. Вся інформація яка приходить від користувача це завжди рядок. 

const answers = [];

answers[0] = prompt('Твоє імя?', ''); // запис елемента в масив- перший елемент
answers[1] = prompt('Твоє прізвище?', '');
answers[2] = prompt('Кількьсть років?', '');

console.log(typeof (answers)); // вивід в поле браузера відповідей.