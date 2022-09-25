// button to ADD new book to page
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

// button to CREATE new book
const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

// button to CLOSE form pop up
const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none')

// Book constructor
class Book {
    constructor(title, author, pages, read) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + 'pg';
    this.read = form.read.checked;
    }
}

// creates book from Book Constructor, adds to library
let myLibrary = [];
let newBook;

// function for adding new book to array/library
function addBookToLibrary() {
    event.preventDefault();
    popUpForm.style.display = 'none';

    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook); // adds 'newBook' constructor to empty 'myLibrary' array
    setData(); // saves updated array in local storage
    render();
    form.reset(); // resets all the values in the form
}

// creates book visual in browser
function render() {
    const display = document.getElementById('library-container');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild('book')); // removes the child node 'book' from the DOM and returns the removed node

    for(let i = 0; i < myLibrary; i++) {
        createBook(myLibrary[i]); 
    }
}

// creates book DOM elements to use in render() function
function createBook(item) {
    const library = document.querySelector('#library-container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');
    const removeDiv = document.createElement('div');
    const readDiv = document.createElement('div');

    bookDiv.classList.add('book'); 
    bookDiv.setAttribute('id', myLibrary.indexOf(item)); // indexOf returns the first index at which a given element can be found in the array

}

// setting Library to be stored in local storage
function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}