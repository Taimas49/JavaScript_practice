'use strict';
// Функция и ее аргументы
let num = 30;
function showFirstMessage (a, b) {
    console.log(a + a * b);
    let num = 10;
    console.log(num);
}
showFirstMessage(14, 5);
console.log(num);

// Замыкание функции 
function doSmth () {
    num = 20; 
    function doThis () {
        console.log(num); //В этой внутренней функции нет 'num' она ищет ее выше
    }
    doThis();
}
doSmth();

//return
function calc(a, b) {
    return (a + b);
    // код после return не выполняется 
}

console.log(calc(2, 10));
console.log(calc(10, 10));
console.log(calc(10, 20));



//return
function ret () {
    let num = 50;
    return num; // с помощью return можем передать переменную в код
}

const annum = ret(); // annum получает результат функции ret 
console.log(annum);// получаем в консоли 50 


// function declaration 
function nameK () {
    //Код
    //Существует до того как ее можно применить 
    //Первым делом сканирует функции declaration
}

//function expression 
const logger = function() {
    console.log('hello');
};
logger();


//ES6 стрелочная функция 
function calc(a, b) {
    return (a + b);
}
console.log(calc(2, 10));

const calcul = (a, b) => {
    return a + b;
};    
const cal = (a, b) => {a + b;};