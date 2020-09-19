'use strict';

// const { wrap } = require("module");

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

      

box.style.backgroundColor = 'blue';
box.style.width = '400px';

btns[2].style.backgroundColor = '100%';

circles[2].style.cssText = 'background-color: red; width: 50px; height: 50px';


// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.cssText = 'background-color: green';
// }

hearts.forEach ( function (item, i) {
    // console.log(`Элемент №${i+1} = ${item}`);
    item.style.backgroundColor = 'green';
});

//Основные методы 

const div = document.createElement('div');
// const text = document.createTextNode('Hello');

div.classList.add('black');

document.body.append(div);
document.querySelector('.wrapper').append(div);

// wrapper.append(div); Вставляем в конце
// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]);

// wrapper.removeChild(hearts[2]);

// wrapper.prepend(div); Вставить в начале 

// hearts[1].before(div); //До элемента
// hearts[1].after(div); После элемента 

// circles[2].remove();

// hearts[1].replaceWith(circles[1]);

// wrapper.replaceChild(circles[1], hearts[0]);


// Добавление html

div.innerHTML = '<div class="heart"></div>'; // Можем добовлять целые конструкции 


// div.textContent = 'Hello' Просто текст 

div.insertAdjacentHTML('afterend0','<div class="heart"></div>');

// const bb = wrapper.querySelector('heart');