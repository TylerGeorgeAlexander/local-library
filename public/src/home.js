function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let counter = 0;
    for(let book of books){
      for(let i = 0; i < book.borrows.length; i++)
      if(book.borrows[i].returned === false){
        counter++;
      }
    }
  return counter;
}

/*
function getMostCommonGenres(books) {
  for(let book of books){
    let newArr = []
    if(!book.genre == null){
      newArr.push(book.genre)
    } else if(book.genre === newArr.forEach(element => console.log(element)){

    }
  }
}
*/
/*
function getMostCommonGenres(books) {
  let bookReduce = books.forEach((book) => {
    let counter = 0;
    let objArr = [];
    for(let i = 0; i < objArr.length; i++){
      if(!book.genre){
        objArr.push({
          name: book.genre,
        });
      } else {
        objArr[i].count = 1;
      }
    }

  });
  console.log(objArr);
  let bookSort = bookReduce.sort((a, b) => a.count > b.count ? 1 : -1);
  return bookSort.slice(0, 5);
}

*/
/*
function getMostCommonGenres(books) {
//console.log(books);

const { genre, borrows } = books;
const newArr = [];
for(book of books){
  const { genre, borrows } = book;
  if(borrows.length > 5){
  newArr.push( { name: genre, count: borrows.length } );
  }
}
console.log(newArr);
let sortArr = newArr.sort((a, b) => (a.count > b.count ? 1 : -1));
return sortArr;
}
*/
function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
