const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: { name: "George R. R. Martin", birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: { name: "Frank Herbert", birthYear: 1920 },
    releaseYear: 1965,
  },
];

const fantasyOrScienceFiction = () => {
  return books.filter(
    (book) => book.genre === "Ficção Científica" || book.genre === "Fantasia"
  );
};

// console.log(fantasyOrScienceFiction());

const expectedResult2 = [
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: { name: "H. P. Lovecraft", birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
];

const oldBooksOrdered = () => {
  return books
    .filter((book) => 2022 - book.releaseYear > 60)
    .sort((book1, book2) => book1.releaseYear - book2.releaseYear);
};

// console.log(oldBooksOrdered());

const expectedResult3 = ["Fundação", "Duna"];

const booksByAuthorBirthYear = (birthYear) => {
  return books
    .filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name);
};
const result = booksByAuthorBirthYear(1920);

// console.log(booksByAuthorBirthYear(1920));

const expectedResult4 = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

const fantasyOrScienceFictionAuthors = () => {
  return books
    .filter(
      (book) => book.genre === "Ficção Científica" || book.genre === "Fantasia"
    )
    .map((book) => book.author.name)
    .sort();
};

// console.log(fantasyOrScienceFictionAuthors());

const expectedResult5 = [
  "O Senhor dos Anéis",
  "Fundação",
  "O Chamado de Cthulhu",
];

const oldBooks = () => {
  return books
    .filter((book) => 2022 - book.releaseYear > 60)
    .map((book) => book.name);
};

// console.log(oldBooks());

const expectedResult6 = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  return books
    .filter((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  ))
  .map((book) => book.name);
}

console.log(authorWith3DotsOnName())
