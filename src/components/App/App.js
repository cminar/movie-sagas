import React, { Component } from 'react';
import './App.css';
import MovieList from '../movieList/movieList';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>COLINS MOVIES</p>
        <MovieList />
      </div>
    );
  }
}

export default App;
