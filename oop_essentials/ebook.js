import Book from './book.js';

export default class EBook extends Book {
  constructor(title, author, yearPublished, fileFormat) {
    super(title, author, yearPublished);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(value) {
    if (typeof value === 'string' && value.trim() !== '') {
      this._fileFormat = value;
    } else {
      throw new Error('Invalid file format');
    }
  }

  printInfo() {
    super.printInfo();
    console.log(`File Format: ${this._fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) throw new Error('Argument must be an instance of Book');
    return new EBook(book.title, book.author, book.yearPublished, fileFormat);
  }
}


