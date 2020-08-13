'use strict';

const { type } = require("os");

// To string

//1)
console.log(typeof(String(null)));


//2
console.log(typeof(5 + ''));

const num = 5;
console.log('https:://vsk.com/catalog/' + num);


const fontSize = 23 + 'px';
console.log(fontSize);

//To number 

// 1)
console.log(typeof(Number('10')));
// 2) Унарный плюс - знак + который ставится перед другими типами данных 

console.log(typeof((+'10')));
// 3)
console.log(typeof(parseInt('15px', 10))); 

//Все что получаем от пользователя всегда будет тип данных строка String
let a = +prompt('Hello', '');

// To boolean

//0, '', null, undefined, NaN; - Все это будет превращаться в False 

let switcher = null;

switcher = 1;
if (switcher) {
    console.log('working');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'324235'));