const booksRepository = require('./books-repository');

async function getBooks({offset, limit}) {
   const books = booksRepository.getBooks(offset, limit)
  return books;
}

async function create(title) {
  return booksRepository.create(title);
}

module.exports = {
  getBooks,
  create,
};
