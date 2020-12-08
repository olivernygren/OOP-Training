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

//Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype); 

//Instantiate magazine-object
const mag1 = new Magazine('Mag One', 'Pernilla Hjortmo', '2015', 'May');

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);