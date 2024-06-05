
export class Book {
    constructor(title, author, yearOfPublication) {
        this.title = title;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== 'string') {
            console.log('Title value is not String!');
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value !== 'string') {
            console.log('Author value is not String!');
        }
        this._author = value;
    }

    get yearOfPublication() {
        return this._year;
    }
    set yearOfPublication(value) {
        if ( value <= 0) {
            console.log('The year of publication should be a positive number');
        }
        this._year = value;
    }
    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year of publication: ${this.yearOfPublication}`);
    }
    static findOldestBook(books) {
        let oldestBook = null;
        for (const book of books) {
            if (oldestBook == null){
                oldestBook = book;
            }

            if (book.yearOfPublication < oldestBook.yearOfPublication) {
                oldestBook = book;
            }
        }
        return oldestBook;
    }
}

const book1 = new Book('FirstBook', 'James', 1990);
const book2 = new Book('SecondBook', 'Anna', 1980);
const book3 = new Book('ThirdBook', 'Tom', 2003);
const books = [book1, book2, book3];
const book = Book.findOldestBook(books);
console.log(`The oldest book is: ${book.yearOfPublication}`);
book1.printInfo();
book2.printInfo();
book3.printInfo();