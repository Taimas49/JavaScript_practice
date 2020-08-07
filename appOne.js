//Часть 1
let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
    }
}

// start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Какой последний фильм вы посмотрели ?');
        const b = prompt('На сколько вы его оцените ?');  
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('sucsess');
    } else {
        console.log('error');
        i--;
    }
    
    }
}
// rememberMyFilms();

//Часть 2
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count  >= 10 &&  personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
    console.log(personalMovieDB['count']);
}

// console.log(personalMovieDB);

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB['privat']);



function writeMyGenres () {
    for (let i = 1; i<=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимй жанр под номером ${i}`);
         //-1 что бы 0 строка в массиве не была пустая
    }
}
writeMyGenres ();

