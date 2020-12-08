//Constructor
function Book(title, author, year) {
    this.title = title; // this.title = the title is THIS function, 'title' = the title that was passed in to the function
    this.author = author;
    this.year = year; 

    this.getSummary = function () {
        return `${this.title} was written by 
        ${this.author} in ${this.year}.`;
    }
}

// Instantiate an object
const book1 = new Book('Book One', 'Hans Bersås', '2008');
const book2 = new Book('Book Two', 'Lars Lessner', '1989');

console.log(book1.getSummary());