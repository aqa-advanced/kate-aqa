import {Book} from "./book.js";
import {Ebook} from "./ebook.js";


const book1 = new Book('FirstBook', 'James', 1990);
const book2 = new Book('SecondBook', 'Anna', 1980);
const book3 = new Book('ThirdBook', 'Tom', 2003);
const eBook = new Ebook('Title-eBook', 'Jane', 1978, 'PDF')

const allBooks = [book1, book2, book3, eBook];

const oldestBook = Book.findOldestBook(allBooks);
console.log(`The oldest book is: ${oldestBook.title}, published in ${oldestBook.yearOfPublication}`);
book1.printInfo();
book2.printInfo();
book3.printInfo();
eBook.printInfo();