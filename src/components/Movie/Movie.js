import React, {Component} from 'react';
import './Movie.css'
 
class Movie extends Component {

    state = {
        toggle: false
    }

    handleClick = (event) => {
        console.log('in handleClick')
    }

    render() {
        return (
            <div className='movie'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Title: {this.props.movie.title}</h3>
                    <br></br>
                    <img src={this.props.movie.poster} height='200px' width='auto' onClick={this.handleClick}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
            </div>
        )
    }
}
export default Movie;