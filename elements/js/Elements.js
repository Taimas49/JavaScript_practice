const wr = document.querySelector('.wrapper');
const { wrap } = require("module");
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');//html коллекция
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '800px';
btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

box.style.cssText = `background-color: gray; border-radius: 100%`;


// for ( let i = 0; i < hearts.length; i++) {
    //     hearts[i].style.backgroundColor = 'gray';
    // }
    
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

//Методы 

const div = document.createElement('div');

// const text = document.createTextNode('helo');
div.classList.add('heart');

// wrapper.append(div); - вставляет элемент в конец родителя 

wrapper.prepend(div); // Втавляет элемент в начало родителя 
hearts[1].before(div); // Перед 2-м элементом 
hearts[2].after(div);//После 3-го элемента 


//Удаление элементов 
circles[2].remove();
circles[1].replaceWith(hearts[2]);//Заменяет элементы одного на другео 


wrapper.appendChild(div);


wrapper.insertBefore(div, hearts[0]); //Устаревший метод добавления элемента 

const block = document.createElement('div');
block.style.cssText = 'width: 100px; height: 50px; background-color: pink; border-radius: 10px';
wr.prepend(block);


div.innerHTML = 'Wrapper'; //Используется для создания HTML структур 
div.innerText = 'fsdf'; // Вставляет просто текст 



div.insertAdjacentHTML('', )




    
    // for (let i = 0; i < hears.length; i++) {
        //     hears[i].style.backgroundColor = 'gray';
        // }
        // const div = document.createElement('div'); // сохраняет только в js файул
        // const text = document.createTextNode('Хэллоу');
        
        // div.classList.add('black');//Добавляет класс
        // document.body.append(div); 
        // document.querySelector('.wrapper').append(div); 