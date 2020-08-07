'use strict';

const { ftruncate } = require("fs");

//Свойства
const str = 'teSt';
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); //свойство длины строки

//Методы 
console.log(str.toUpperCase());
console.log(str);

const fruit = 'Some body once told me';
console.log(fruit.indexOf('t'));

const logg = 'Some body once told me';
console.log(logg.slice(19));

console.log(logg.substr(4,6));


//Методы чисел
const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));