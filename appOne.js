//Часть 1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
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

//Часть 2
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
console.log(personalMovieDB);


