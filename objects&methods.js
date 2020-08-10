'use strict';



// console.log(options['colors'][`border`]);
// Что бы достать свойство объекта в объекте нужно указать объект[объект][св-во]
// delete options['name'];
// console.log(options);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'gray',
    }
};


console.log(Object.keys(options).length);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);

//     }
// }




const bigObj = {
    color: 'grey',
    height: 1.5,
    weght:3500,
    models: {
        model1: 'Y',
        model2: 'Z',
        model3: 'X',
    },
    complectation: 'AWD',
    fuelType: {
        gas: 'yes',
        electro: 'no',
        bio: 'no',
        new: {
            asd: 'awsd',
            asdf: 'asd',
            asd2: 'asd',
            asdq: 'asdasd',
        },

    },
    maxSpeed: 350,
    numberOfSeat: 5,
    makeTest: function () {
        console.log('Test');
    }
};
bigObj.makeTest();
// console.log(Object.keys(bigObj[`fuelType`][`new`]).length);

const {gas, electro, bio} = bigObj.fuelType;
console.log(gas, electro, bio);