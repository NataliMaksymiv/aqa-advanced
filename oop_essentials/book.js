export default class Book {
    constructor(title, author, yearPublished) {
      this._title = title;
      this._author = author;
      this._yearPublished = yearPublished;
    }
  
    get title() {
      return this._title;
    }
    set title(value) {
      if (typeof value === 'string' && value.trim() !== '') {
        this._title = value;
      } else {
        throw new Error('Invalid title');
      }
    }
  
    get author() {
      return this._author;
    }
    set author(value) {
      if (typeof value === 'string' && value.trim() !== '') {
        this._author = value;
      } else {
        throw new Error('Invalid author');
      }
    }
  
    get yearPublished() {
      return this._yearPublished;
    }
    set yearPublished(value) {
      if (typeof value === 'number' && value > 0) {
        this._yearPublished = value;
      } else {
        throw new Error('Invalid year');
      }
    }
  
    printInfo() {
      console.log(`Title: ${this._title}, Author: ${this._author}, Year Published: ${this._yearPublished}`);
    }
  
    static findOldestBook(books) {
      if (!Array.isArray(books) || books.length === 0) return null;
      return books.reduce((oldest, book) => (book.yearPublished < oldest.yearPublished ? book : oldest));
    }
  }
  
  