import React from 'react';


const BookFilterInput = ( { title, author } ) => {

  return (
    <div className="bookFilter">
      <div> { title } </div>
      <div> { author } </div>
    </div>
  );
}

export default BookFilterInput;