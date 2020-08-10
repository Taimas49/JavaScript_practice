'use strict';


function first () {
    //Что либо делается 
    setTimeout(function () {
        console.log(1);
    }, 500);
}


function second() {
    console.log(2);
}
first();
second();



//Callback functions
function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}

learnJS('JavaScript', function () {
    console.log('I sleep');
});










function doThis (show, message) {
    console.log(`Я люблю ${show}`);
    message();
}

function love () {
    console.log('Да я ее очень люблю');
}
doThis ('Ангелину', love);