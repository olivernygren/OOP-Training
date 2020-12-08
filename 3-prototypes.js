//Constructor
function Book(title, author, year) {
    this.title = title; // this.title = the title is THIS function, 'title' = the title that was passed in to the function
    this.author = author;
    this.year = year; 
}

//getSummary prototype
Book.prototype.getSummary = function() {
    return `${this.title} was written by 
    ${this.author} in ${this.year}.`;
}

//getAge (years passed since book.year...)
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

//Revise / Change Year (if re-written...)
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instantiate an object
const book1 = new Book('Book One', 'Hans Bersås', '2008');
const book2 = new Book('Book Two', 'Lars Lessner', '1989');

console.log(book1);
book1.revise('2019');
console.log(book1)