import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadBooks } from '../../actions/books'

import NewBookForm from '../NewBookForm';
import BookList from '../BookList';
import BookListAppTitle from '../../components/BookListAppTitle';
// import {
//   getBooksFromFakeXHR,
//   addBookToFakeXHR,
//   getBookByIdFromFakeXHR
// } from '../../lib/books.db';


class App extends Component {
  constructor(){
    super();
    this.state = {
      books: [] // initial state
    }
  }


  //addNewBook(bookTitle, bookAuthor){


    // let newBook = {
    //   title: bookTitle,
    //   author: bookAuthor
    // };
    // console.log(newBook, "AddNewBook");
    // addBookToFakeXHR(newBook)
    //   .then(addedBooks => {
    //     console.log(addedBooks, "BEFORE SPREAD");
    //     return this.setState({
    //       books: addedBooks
    //     });
    //   });
  //}

  // setFilter(event){
  //   this.setState({
  //     filterInput: event.target.value
  //   });
  // }

  componentDidMount(){
    this.props.loadBooks()

   // getBooksFromFakeXHR()
   //    .then(booksData => {
   //      console.log("invoking function loadBooks in props");
   //      this.props.loadBooks(booksData)
   //      //this.setState({ books: booksData }); // set the STATE to the response
   //    });
  }

  render() {
    console.log(this.props.books);
    console.log(this.props.loadBooks);

    return (
      <div className="App">

        <NewBookForm/>
        <br />
        <BookList books={this.props.books}/>

      </div>
    );
  }
}

const mapStateToProps = (state) => { // returns an object onto this.props
  return {
    books: state.bookList // makes it this.props.books
  }
}


const mapDispatchToProps = (dispatch) => {
    return {
      loadBooks: () => {
        console.log("Dispatching the action");
        dispatch(loadBooks());
      }
    }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;


    //<BookListAppTitle title="Nosferatu's Library"/>