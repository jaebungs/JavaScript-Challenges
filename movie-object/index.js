class Movie {
    constructor(movieName, genre, director, releaseYear, rating) {
        this.movieName = movieName,
        this.genre = genre,
        this.director = director,
        this.releaseYear = releaseYear,
        this.rating = rating
    }

    getInfo(){
        return `${this.movieName}, a ${this.genre} film directed by ${this. director} was relased in ${this.releaseYear}. It received a rating of ${this.rating}.`
    }
}


const movie1 = new Movie('Cat ShaSha', 'Animation', 'John Dee', 2020, '4.2/5.0');
const movie2 = new Movie('Turtle Fake Ninja', 'Action', 'Foo Bar', 2021, '1.2/5.0');
console.log(movie1.getInfo());
console.log(movie2.getInfo())

function MovieObj(movieName, genre, director, releaseYear, rating){
    this.movieName = movieName;
    this.genre = genre;
    this.director = director;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

MovieObj.prototype.getInfo = function(){
    return `${this.movieName}, a ${this.genre} film directed by ${this. director} was relased in ${this.releaseYear}. It received a rating of ${this.rating}.`
}

const movie3 = new MovieObj('WHO', 'Romance', 'Doctor', 2021, '4.7/5.0');
const movie4 = new MovieObj('Gotta Catch That', 'Action', 'my cat', 2021, '5.0/5.0');
console.log(movie3.getInfo());
console.log(movie4.getInfo())