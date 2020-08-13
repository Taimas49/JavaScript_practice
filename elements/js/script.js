'use strict';
'DOM - Document object model';
const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); // Мы получаем не 1 элемент
// а псевдомассив 
console.log(btns); // html коллекция 
console.log(btns[1]);// Один элемент с индексом 1

const circles = document.getElementsByClassName('circle');// метод и так работает с классом
console.log(circles);


const hears = document.querySelectorAll('.heart');//Ставим точку т.к. указываем селектор CSS
//Большой плюс querySelectorAll у него есть метод for each
console.log(hears);
hears.forEach (i => {
    console.log(i);
});


const oneHeart = document.querySelector('.heart'); //Позволяет получить только 1 элемент со страницы
//Выводится самый первый элемент селектора 
console.log(oneHeart);