import React from 'react';


const BookListItem = ( { title, author } ) => {

  return (
    <div className="books">
      <div> { title } </div>
      <div> { author } </div>
    </div>
  );
}

export default BookListItem;