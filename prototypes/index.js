// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
// The chain ends when we reach a prototype that has null for its own prototype.

function Book(title, author, genre, isAvailable = true) {
    this.id = Math.floor(Math.random() * 1000); // for test
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.isAvailable = isAvailable;
}

Book.prototype.borrow = function () {
    if (!this.isAvailable) {
        return "Sorry. This book is unavailable at the moment.";
    }

    this.isAvailable = false;
    return `A borrow request accepted. "${this.title}" will now be unavailable until it is returned. Happy reading!`;
};

Book.prototype.return = function () {
    if (this.isAvailable) {
        return "Sorry, but this book has not been borrowed so it cannot be returned.";
    }

    this.isAvailable = true;
    return `A return request accepted. "${this.title}" will be available.`;
};

Book.prototype.getInfo = function () {
    return {
        id: this.id,
        title: this.title,
        author: this.author,
        genre: this.genre,
        isAvailable: this.isAvailable,
    };
};

const Books = [
    new Book("A Brief History of Time", "Stephen Hawking", "Science"),
    new Book("Moral Letters to Lucilius", "Seneca", "Philosophy"),
];

Books[0].borrow();
Books[1].borrow();
Books[0].borrow();
Books[1].return();
Books[0].getInfo();
