function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1 );
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  for(let book of books){
    for(let borrow of book.borrows){
      if(borrow.id === account.id){
        counter++;
      }
    }
  }
  return counter;
  /*
  function getTotalNumberOfBorrows(account, books) {
  const accId = account.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++));
  return total;
}
maybe make the commented code more concise by replacing the 2nd forEach with a .reduce()
*/
  // account.id
  // books.borrows.id
}

function getBooksPossessedByAccount(account, books, authors) {

  /* compared books.borrows.id to 
  authors.id && books.borrows.returned: false
  */
// let result = parks.filter((park) => park.rating >= 4.5);
  /*
  const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
*/
  let bookCheckedOut = books.filter((book) => book.borrows.forEach(element => element.returned === false));
  console.log(bookCheckedOut);
  return bookCheckedOut;
  /*
  for (let author of authors){
    for(let book of books){
      if(author.id === book.authorId)

    }
  }
  */
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
