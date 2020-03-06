import React, {Component} from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';

class movieList extends Component {

    componentDidMount() {
        this.getMovies()
    }

    getMovies = () => {
        this.props.dispatch({
            type: 'MOVIES'
        })
    }

    render() {
        return (
            <div className='movieResults'>
                {this.props.reduxState.movies &&
                    this.props.reduxState.movies.map((movie) => {
                        return(
                            <Movie movie={movie}/>
                        )
                    })}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(movieList); 