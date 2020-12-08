class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}.`;
    }
}

//Magazine subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year); //super calls for parent-constructor
        this.month = month;
    }
}

// Instantiate Magazine
const mag1 = new Magazine('Mag One', 'Author One', '2007', 'June');
console.log(mag1.getSummary());