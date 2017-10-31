// making a dummy component (functional component)
import React from 'react';
import BookListItem from'../../components/BookListItem';
//import BookFilterInput from '../../components/BookFilterInput'

const BookList = ({books}) => {
  return (
    <div className="book-list"> {
      books.map((book) => {   //renders X amount of books
        return (
          <BookListItem title={book.title} author={book.author} key={book._id}/>
        );
      })
    }
    </div>
  );
}

export default BookList;