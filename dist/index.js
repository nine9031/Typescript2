"use strict";
const { Author, Book } = require("./Ex1");
console.log("################# Ex1 #################");
const author1 = new Author("Alongkon Natphunwat", "664259031@webmail.npru.ac.th");
console.log(author1.toString());
const author2 = new Author("Udsanee Pakdeetrakulwong", "Udsanee@webmail.npru.ac.th");
console.log(author2.toString());
console.log("################# Ex1 #################");
const book1 = new Book("Basic Programming", [author1, author2], 180, 300);
console.log(book1.toString());
console.log(book1.getAuthorsNames());
console.log("##################################");
