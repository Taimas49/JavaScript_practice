// let arr = ['How old are you?',];
// let question = prompt(arr[0]);

const { log } = require("console");



let questions = [];
let answers = [];
alert('Darova, пиши сюда любые вопросы');

for (let i = 1; i <= 10; i++) {
    let a = questions.push(prompt(`Вопрос номер ${i}`));
}
const b = prompt('Вопросы тебя удовлетворяют?(y/n)');
if (b == 'y') {
    alert('Отлично!, продолжим');
    alert('Теперь ответь на свои же вопросы');
} else if(b == 'n') {
    alert('Перезагрузите страницу');
}
questions.forEach(function kk (item, i) {
    let ans = prompt(`Ответ на вопрос на вопрос №${i}: ${item}`);
    answers.push(ans);
});
console.log(questions);
console.log(answers);

//Вывести вопросы и ответы на страницу 



//Прототип
const car =  {
    weght: 3500,
    wheels: 4,
    doors: 5,
    sayHello: function () {
        console.log('hello');
    }
};

const carAudi = {
    color: 'black',
    weight: 2500,
};

//1
Object.setPrototypeOf(carAudi, car);
//
const carBMV = Object.create(car);
console.log(carBMV.doors)

console.log(carAudi.doors);
