// declare empty array for library
let myLibrary = [];

// object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return (title + author + ', ' + pages + ', ' + read);
    }
}

// function for adding new book to array
function addBookToLibrary() {
    
}

const theHobbit = new Book('The Hobbit', ' by J.J.', '259 pages', 'not read yet.');
console.log(theHobbit.info());


