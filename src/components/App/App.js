import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import './App.css';
import MovieList from '../movieList/movieList';
import MovieDescription from '../MovieDescription/MovieDescription';
import Edit from '../Edit/Edit'
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import Genre from '../Genre/Genre'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <p>COLINS MOVIE LIST</p>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/description/:id" render={({match})=><MovieDescription match={match}/>}/>
          <Route exact path="/edit" component={Edit} />
          <Route path='/genre/:id' render={({match})=><Genre match={match}/>}/>
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})


export default connect(putReduxStateOnProps)(App);
