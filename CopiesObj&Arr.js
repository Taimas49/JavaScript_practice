'use strict';

let a = 5,
    b = a;
b = b + 5;
console.log(b);
console.log(a);


const obj = {
    a: 5,
    b: 1
};


// const copy = obj;// Ссылка на объект 
// copy.a = 10;//Модифицируем не копию а сам объект т.к. это ссылка на объект 
// console.log(copy);
// console.log(obj);




//Клонирование объекта 


function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 10
    }
};


const newNumbers = copy(numbers);
newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);
//Создали поверхностную копию объекта (Не клонирует объекты как свойства)


//Второй способ клонирования объекта 
const add = {
    d: 16,
    i: 20
};

const addClone = Object.assign({}, add);
// console.log(Object.assign(numbers, add));
console.log(add);
addClone.i = 442;
console.log(addClone);



//создаем копию массива 
const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray -- не правильно тк в newArr попадет ссылка на массив а не копия 
const newArray = oldArray.slice(); // Метод slice 
newArray[1] = 'иди на хуй';
console.log(newArray);
console.log(oldArray);

//spread оператор ... разворачивает структуру и превращает ее в набор данных 

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

//spread оператор 
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);// разворачивает массив превращая 2 5 7 в отдельные значения 
// и подставляет их в функцию log


//4 способ создания копий объектов 
//ES8
const array = ['a', 'b'];

const newAaray = [...array];

//ES9
const q = {
    ine: 1,
    too: 2
};
const newQ = {...q};