// 1 - 
let x = 5;
alert( x++ ); //Сперва вернет 5 затем увеличит ее на 1 
//(++x) - тогда вернуло бы результат 6


//2
// [ ] + false - null + true
console.log([] + false - null + true);// Пустой массив будет строкой 'false' - null + true
//Ответ будет NaN

// 3
let y = 1; 
let x = y = 2; //Последовательное присваивание // Справа на лево сначала присваеваем y = 2 потом x = y(2)
alert(x);// x = 2
// 4 
console.log([] + false - null + true);

//5
console.log([] + 1 + 2);
//Ответ будет "12" т.к будет '' + 1 = '1' + 2 = '12'
//6
console.log('1'[0]); // Ответ: 1, [] - это индекс значения

//7
console.log(2 && 1 && null && 0 && undefined);
//Вернет значение null
// && запинается на лжи null - false дальше false он не пойдет 
// || или запинается на правде 
console.log(!!( 1 && 2 ) === (1 && 2));
//!! превращает данные в Boolean тип
               // 3
alert( null || 2 && 3 || 4 ); // 2 && 3 возвращает последний элемент т.е. 3
//8 
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b)
// Два разных хранилища, а данные идентичны Ответ false

//9 
alert(+'Infinity');
//+ перед строкой преобразовывает в число, число Infinity = бесконечность

//10 
console.log('Ёжик' > 'яблоко');

//11
console.log(0 || "" || 2 || undefined || true || falsе);
//Выведет 2 т.к. ИЛИ || запинается на правде 2 true => вернет 2