// button to create new book, add new book to page, and close pop
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none')


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


