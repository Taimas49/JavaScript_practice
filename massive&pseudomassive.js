"use strict";


//Свойство lenght состоит из последнего индекса + 1
const arr = [1, 2, 3, 4, 5, 6, 10];
arr[99] = 0;// нарушается логика массива
console.log(arr.length);// 100 элементов
console.log(arr);// от 1 до 10 и 92 empty items

arr.pop(); // метод поп удаляет последний элемент массива


const arr2 = [1, 2, 3, 4, 5, 6, 10];

arr2.push(20);// метод push добавляет элемент в конец массива
console.log(arr2);
console.log(arr2[3]);


//перебор массива 
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
// методом for of можно перебирать только массивом, строку, псевдо массивы
for (let value of arr2) {
    console.log(value);
    //Могут использовать break и continue в отличие от метода for each
}


//Метод массива for each
const arr3 = [1, 2, 3, 4, 5, 6, 10];
// Позволяет гибко перебрать все элементы массива 
arr3.forEach(function(item/*элемент который перебираем*/ , i/*номер по порядку*/, arr3/*массив который перебираем */) {
    console.log(`Элемент №${i+1}: ${item} внутри массива ${arr3}`);
});

//Формирование массива на основании строк 
const str = prompt('','');
const products = str.split(', '); //Рразделение при помощи запятой
console.log(products);

//Формирование строки на основании массива 
const str1 = prompt('','');
const products1 = str1.split(', ');//Создание массива 
console.log(products1.join('; '));// объединение элементов массива в строки



//
const str = prompt('','');
const products = str.split(', ');
products.sort();// Всегда сортирует элементы массива как строки
//Строки будут в алфавитном порядке 
console.log(products.join('; '));

// Шаблон который сортирует числа по возростанию
const arr = [2, 13, 34, 8, 10];
arr.sort(compareNum);
console.log(arr);


function compareNum(a, b) {
    return a - b;
}
//



const strings = 'Hello';
for (let i of strings) {
    if (i == 'H') {
        console.log(`Найдена переменая ${i}`)
    }
}



const kdss = [3, 5, 234, 11, 63, 34, 624];

console.log(kdss.splice(2, 2, 123, 234));