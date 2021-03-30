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

