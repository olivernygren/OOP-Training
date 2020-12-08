const book1 = {
    title: 'Book One',
    author: 'Hans Bersås',
    year: '2008',
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}.`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Lars Lessner',
    year: '1989',
    getSummary: function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}.`;
    }
};

console.log(Object.values(book2));




