import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
import BookListAppTitle from '../../components/BookListAppTitle';
import {
  getBooksFromFakeXHR,
  addBookToFakeXHR,
  getBookByIdFromFakeXHR
} from '../../lib/books.db';


class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [] // initial state
    }
  }

  addNewBook(bookTitle, bookAuthor){
    let newBook = {
      title: bookTitle,
      author: bookAuthor
    };
    console.log(newBook, "AddNewBook");
    addBookToFakeXHR(newBook)
      .then(addedBooks => {
        console.log(addedBooks, "BEFORE SPREAD");
        return this.setState({
          books: addedBooks
        });
      });
  }

  componentDidMount(){
   getBooksFromFakeXHR()
      .then(response => {
        return response;
      })
      .then(fetchedData => {
        this.setState({ books: fetchedData }); // set the STATE to the response
      });
  }

  render() {
    console.log(this.state.books, "RENDER");
    return (
        <div className="App">

          <NewBookForm
            quote="Nosferatu's Library"
            addNewBook={this.addNewBook.bind(this)}
          />
          <BookList books={this.state.books}/>

        </div>
    );
  }
}

export default App;
