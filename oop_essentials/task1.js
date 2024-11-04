
import Book from './book.js';
import EBook from './ebook.js';

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);

book1.printInfo();
book2.printInfo();

const ebook1 = new EBook("JavaScript: The Good Parts", "Douglas Crockford", 2008, "PDF");
ebook1.printInfo();

const books = [book1, book2, ebook1];
const oldestBook = Book.findOldestBook(books);
console.log("Oldest Book:");
oldestBook.printInfo();

const ebookFromBook = EBook.fromBook(book1, "ePub");
ebookFromBook.printInfo();
