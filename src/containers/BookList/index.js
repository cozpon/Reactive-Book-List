// making a dummy component (functional component)
import React from 'react';
import BookListItem from'../../components/BookListItem';
import BookFilterInput from '../../components/BookFilterInput'

const BookList = ({books}) => {
  console.log(books, "BOOKS");
  return (
    <div className="book-list">{
    books.map((book, author, idx) => {
     //renders X amount of books
     console.log(book, "BOOK INSIDE BOOKLIST");
     return (
       <BookListItem title={book.title} author={book.author} key={idx}/>
     );
   })
 }
 </div>
  );
}

export default BookList;