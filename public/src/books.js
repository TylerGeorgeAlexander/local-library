function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let trueArr = [];
  let falseArr = [];
  
  for(let book of books){
    if(book.borrows[0].returned === true){
      trueArr.push(book);
    } else {
      falseArr.push(book);
    }
  }
  return [falseArr, trueArr];
}

function getBorrowersForBook(book, accounts) {

let bookArr = [];
for(let i = 0; i < 10; i++){
  for(let account of accounts){
    if(book.borrows[0].id === account.id){
      bookArr.push(account[i]);
    }
  }
}
console.log(bookArr);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
