import React, { Component } from 'react';
import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
import { getBooksFromFakeXHR,
addBookToFakeXHR, getBookByIdFromFakeXHR }
from '../../lib/books.db';


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

    this.setState({
      books: [...this.state.books, newBook]
    });
  }

  componentWillMount(){
    getBooksFromFakeXHR()
      .then(response => {
        console.log(response, "first response");
        return response;
      })
      .then(fetchedData => {
        console.log(fetchedData, "fecthed data");
        this.setState({ books: fetchedData });
      });
      console.log(this.state.books, 'STATE OF BOOKS');
      //XHR GET requests
      // set the STATE to the response
  }

  componentDidMount(){


    // also might be better to have XHR requests inside this mount

  }


  render() {
    console.log(this.state.books, "YOYOYO");
    return (
        <div className="App">
          <NewBookForm
            quote="Write your Book here? Ok?"
            addNewBook={this.addNewBook.bind(this)}
          />
        <BookList books={this.state.books}/>
        </div>
    );
  }
}

export default App;
