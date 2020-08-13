//Часть 1
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели ?', '');
        }
    },
    rememberMyFilms: function () {
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
    },
// не показываются сообщения / Решение:
//в методе start мы работает с count а не с другой переменной
    detectPersonalLevel: function () {
        if (this.count < 10) {
            alert('Просмотренно довольно мало фильмов');
        } else if (this.count  >= 10 &&  personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (this.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
        console.log(personalMovieDB['count']);
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeMyGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            //-1 что бы 0 строка в массиве не была пустая
            if (genre === '' || genre === null) {
            this.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
            i--;
            } else {
                this.genres[i-1] = genre;
            }
        }
 
    },
    toggleVisivbleMyDB: function () {
      if (this.privat == true) {
        this.privat = false;
      } else {
          this.privat = true;
      }
    },
//
};
personalMovieDB.start();
console.log(personalMovieDB);
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB(personalMovieDB['privat']);
personalMovieDB.writeMyGenres();
personalMovieDB.genres.forEach(function (genre, i, genres) {
    console.log(`Любимый жанр #${i+1} - это ${genre}`);
});
personalMovieDB.toggleVisivbleMyDB();
console.log(personalMovieDB.privat);


