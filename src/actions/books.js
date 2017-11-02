import { getBooksFromFakeXHR, addBookToFakeXHR } from '../lib/books.db.js'

export const LOAD_BOOKS = 'LOAD_BOOKS';
export const ADD_BOOK = 'ADD_BOOK';

export const loadBooks = () => {
  return function(dispatch){
    return getBooksFromFakeXHR().then(books => {
      dispatch({
        type: LOAD_BOOKS,
        books: books
      });
    });
  }

  // console.log('ACTION: LoadBOOKS is invoked');
  // console.log("action", books);
  // return {
  //   type: LOAD_BOOKS,
  //   books: books
  // }
}


export const addBook = (newBook) => {
  return function(dispatch) {
    return addBookToFakeXHR(newBook).then(book => {
      dispatch({    //using middleware to allow action to be a function, and then return an object
        type: ADD_BOOK,
        book: book
      })
    });
  }


  // return {
  //   type: ADD_BOOK,
  //   book: book
  // }
}



