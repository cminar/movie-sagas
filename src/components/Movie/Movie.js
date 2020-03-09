import React, {Component} from 'react';
import './Movie.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

 
class Movie extends Component {

    state = {
        toggle: false
    }

    handleClick = (id) => {
        console.log('in handleClick')
        console.log(this.props.history);
        this.props.history.push(`/description/${id}`)
        
    }

    render() {
        return (
            <div className='movie'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Title: {this.props.movie.title}</h3>
                    <br></br>
                    <img src={this.props.movie.poster} height='200px' width='auto' onClick= { () => this.handleClick(this.props.movie.id)}/>
                    <br></br>
                    {this.props.movie.description}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
  
  
export default withRouter(connect(putReduxStateOnProps)(Movie));