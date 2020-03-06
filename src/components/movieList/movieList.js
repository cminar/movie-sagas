import React, {Component} from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

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
            <Router>
                <div className='movieResults'>
                    {this.props.reduxState.movies &&
                        this.props.reduxState.movies.map((movie) => {
                            return(
                                <>
                                    <Movie movie={movie} />
                                    <Route path="/movie" Component={Movie} />
                                </>
                            )
                        })}
                </div>
            </Router>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putReduxStateOnProps)(movieList); 