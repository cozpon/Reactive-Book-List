import React, { Component } from 'react';

class NewBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: '',
      authorInput: ''
    }
    this.handleTitleInput = this.handleTitleInput.bind(this); // this gonna go to the render() return
    this.handleAuthorInput = this.handleAuthorInput.bind(this);
  }


  handleSubmit(event){
    event.preventDefault();
    let title = this.state.titleInput;
    let author = this.state.authorInput;
    this.props.addNewBook(title, author);
    this.setState({
      titleInput: '',
      authorInput: ''
    });
  }

  handleTitleInput(event) {
    this.setState({
      titleInput: event.target.value
    });
  }
  handleAuthorInput(event) {
    this.setState({
      authorInput: event.target.value
    });
  }

  handleSearch(event) {
    console.log(event.target.value);
    this.setState({
      searchInput: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2> {this.props.quote} </h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input value={this.state.titleInput} type="text" placeholder="title" onChange={this.handleTitleInput.bind(this)}/>
          <input value={this.state.authorInput} type="text" placeholder="author" onChange={this.handleAuthorInput.bind(this)}/>
          <input type="submit" value="submit book"/>
        </form>
        <p> {this.state.titleInput} <br/>
            {this.state.authorInput}
        </p>

        <form>
          <input type="text" placeholder="search" onChange={this.handleSearch.bind(this)}/>
        </form><br/>
      </div>
      );
   }

}

export default NewBookForm;