// Object of prototypes
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}.`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
};

// Create object

// Use this:
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'Michael Björk';
// book1.year = '2004';

//OR this:
const book1 = Object.create(bookProtos, {
    title: {value: 'Book One'},
    author: {value: 'Michael Björk'},
    year: {value: '2004'}
});

console.log(book1.getSummary())
