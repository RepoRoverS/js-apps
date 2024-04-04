'use strict';

const arr = ['a', 'b', 'c'];
const arrObj = {
  a: 'a',
  1: 'b',
  2: 'c'
};

arrObj.b = '1234'; // Створення ще не існуючого свойства

console.log(arrObj['b']); // якби було просто b то це означало б що ми звертаємось до змінної, а треба рядок.
console.log(arrObj.b); // або можна ще так, джс тут точно знаэ що ми звертаємось до властивості. 
// console.log(arrObj[0]);
// console.log(arrObj.a);
// console.log(arr[2]);

// const obj = {
//   a: 1,
//   b: 2,
// };

const obj = {
  Anna: 500,
  Alice: 800,
};

