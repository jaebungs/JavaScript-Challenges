const Book = require('../available-books/index.js');


class TechBook extends Book{
    constructor(title, author, inStock, ISBN, edition = 1){
        super(title, author, inStock, ISBN)
        this.edition = edition
    }

    getEdition(){
        return `Current book is ${this.edition}st Edition`
    }
}

const techBook1 = new TechBook('JavaScript Basic', 'Console.log', 5, 'III-123', 2);
console.log(techBook1.getEdition());
console.log(techBook1.availability);
