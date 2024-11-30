class Book {
    constructor(title, author, genre, isAvailable = true) {
        this.id = Math.floor(Math.random() * 1000); // for test
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isAvailable = isAvailable;
    }

    borrow() {
        if (!this.isAvailable) {
            return `Sorry. "${this.title}" is unavailable at the moment.`;
        }

        this.isAvailable = false;
        return `A borrow request accepted. "${this.title}" is now unavailable.`;
    }

    return() {
        if (this.isAvailable) {
            return `Sorry, "${this.title}" has not been borrowed.`;
        }

        this.isAvailable = true;
        return `A return request accepted. "${this.title}" is now available.`;
    }

    getInfo() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            genre: this.genre,
            isAvailable: this.isAvailable,
        };
    }

    static findBookById(books, id) {
        return books.find((book) => book.id === id);
    }
}

// Example usage
const Books = [
    new Book("A Brief History of Time", "Stephen Hawking", "Science"),
    new Book("Moral Letters to Lucilius", "Seneca", "Philosophy"),
];

console.log(Books[0].borrow());
console.log(Books[0].return());
console.log(Books[1].borrow());

const foundBook = Book.findBookById(Books, Books[0].id);
console.log(foundBook ? foundBook.getInfo() : "Book not found.");
