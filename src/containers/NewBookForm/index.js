import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInput: ''
    }
    this.handleChange = this.handleChange.bind(this); // this gonna go to the render() return
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.addNewBook(this.state.bookInput);
  }

  handleChange(event) {
    this.setState({
      bookInput: event.target.value
    });
  }

  render() {
    return (

      <div>
        <h2> {this.props.quote} </h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="write ur book" onChange={this.handleChange.bind(this)}/>
          <input type="submit" value="Book Title"/>
        </form>
        <p>{this.state.bookInput}</p>
      </div>

      );
   }

}

export default NewBookForm;