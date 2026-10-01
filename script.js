const bookContainer = document.querySelector(".bookContainer");

const myLibrary = [];

function Book(id, title, author, pages) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  let newBook = new Book(crypto.randomUUID(), title, author, pages);
  myLibrary.push(newBook);
}

function createBookElement(title, author, pages) {
  let card = document.createElement("div");
  let textTitle = document.createElement("h1");
  let textAuthor = document.createElement("h3");
  let textPages = document.createElement("h3");

  card.className = "card";

  textTitle.textContent = title;
  textAuthor.textContent = author;
  textPages.textContent = pages;

  card.appendChild(textTitle);
  card.appendChild(textAuthor);
  card.appendChild(textPages);

  bookContainer.appendChild(card);
}


// Test data
let lotro = new Book(crypto.randomUUID(), "Lord of the Rings", "JRR Tolkien", 588);
let bamse = new Book(crypto.randomUUID(), "Bamse", "Svensk Författare", 78);

myLibrary.push(lotro);
myLibrary.push(bamse);

createBookElement(myLibrary[0].title, myLibrary[0].author, myLibrary[0].pages);
createBookElement(myLibrary[1].title, myLibrary[1].author, myLibrary[1].pages);