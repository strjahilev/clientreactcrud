import React from 'react';
import {getBooks}  from './actions/books'
import { connect } from 'react-redux'

import './App.css';

class App extends React.Component {
  addbook(){

    console.log(this.Input.value) ;
    this.props.onAddBook(this.Input.value);
    this.Input.value = '';
  }

  render() {
    return <div className="App">
      <h1> list</h1>
      <input type="text" ref={(input) => { this.Input = input; }} />
      <button onClick={this.addbook.bind(this)}>BUTTON</button>
      <ul>{this.props.booksStore.map((books, index) =>
          <li key={index}>{books}</li>
      )}
      </ul>
    </div>

  }
}
export default connect(
    state => ({
      booksStore: state
    }),
    dispatch => ({
      onAddBook: (book) => {dispatch(getBooks(book))},

    })
)(App);

// export default App;
