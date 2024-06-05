import {Book} from "./book.js";

export class Ebook extends Book {

    constructor(title, author, yearOfPublication, fileFormat) {
        super(title, author, yearOfPublication);
        this.fileFormat = fileFormat;
    }

    get fileFormat(){
        return this._fileFormat;
    }
    set fileFormat(value){
        if(value !== 'PDF'){
            console.log('Incorrect file format -> PDF expecting');
        }
        this._fileFormat = value;
    }

    printInfo(){
        console.log(`Title: ${this.title}, Author: ${this.author}, Year of publication: ${this.yearOfPublication}, File format: ${this.fileFormat} `);
    }

    static makeEbook(book, fileFormat) {
        return new Ebook(book.title, book.author, book.yearOfPublication, fileFormat);
    }
}
const eBook = new Ebook('Title-eBook', 'Jane', 1998, 'PDF');
eBook.printInfo();

const book = new Book('eBook', 'JaneX', 1999);
const eBookFromBook = Ebook.makeEbook(book, 'PDF');
console.log(eBookFromBook);