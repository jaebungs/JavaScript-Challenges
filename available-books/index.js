function Book(title, author, inStock, ISBN) {
    this.title = title;
    this.author = author;
    this.inStock = inStock;
    this.ISBN = ISBN;
}

// Do not create method inside of constructor. Use prototpye instead, because methods defined in the object (function Book)
// will be created each time it runs. If do prototype approach, all object shares one function.

Book.prototype.getAvailability = function(){
    if (this.inStock === 0) {
        return 'Sorry, Out of Stock.'
    }
    if (this.inStock < 10) {
        return `Low stock. ${this.inStock} left. Please restock the item.`
    }
}

Book.prototype.restock = function(numOfRestock){
    this.inStock += numOfRestock;
}
Book.prototype.sell = function(numOfOrder = 1){
    this.inStock = this.inStock - numOfOrder;
}

// const book1 = new Book('ROM', 'Jinger', 2, 'LAA-1112');
// book1.restock(7);
// console.log(book1.getAvailability());
// book1.sell(2)
// console.log(book1.getAvailability());
// console.log(book1)


class BookClass {
    constructor(title, author, inStock = 3, ISBN){
        this.title = title,
        this.author = author,
        this.inStock = inStock,
        this.ISBN = ISBN
    }

    get availability(){
        return this.getAvailability()
    }

    sell(numOfOrder = 1){
        this.inStock -= numOfOrder;
    }

    set restock(numOfRestock = 1){
        this.inStock = numOfRestock;
    }

    getAvailability(){
        if (this.inStock === 0) {
            return 'Out of Stock.'
        }
        if (this.inStock < 10) {
            return 'Low stock. Please restock the item.'
        }
        return 'Item available.'
    }

}

const bookClass1 = new BookClass('Turing...finally', 'UK', 10, 'EEER-123');

console.log(bookClass1.availability);
bookClass1.sell(10)
console.log(bookClass1.availability);
bookClass1.restock(2)

console.log(bookClass1.availability);

