"use strict";
class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    Author(name, email) {
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail() {
        return this.email;
    }
    toString() {
        return "Author name: " + this.name + "Email: " + this.email;
    }
}
class Book {
    constructor(name, authors, price, qty = 0) {
        this.qty = 0;
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty;
    }
    toString() {
        let details = "Book[name= " + this.name + "authors={Author";
        for (let i = 0; i < this.authors.length; i++) {
            details += this.authors[i].toString() + ",";
        }
        details += "}, price=" + this.price + ", qty= " + this.qty;
        return details;
    }
    getAuthorsNames() {
        let authorsNames = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorsNames += this.authors[i].getName() + ",";
        }
        return authorsNames;
    }
}
module.exports = { Author, Book };
