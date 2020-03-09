import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from '../Movie/Movie';

class Genre extends Component {
    componentDidMount(){
        this.get();
    }

    get = () => {
        console.log('in genre', this.props.match.params.id);
        this.props.dispatch({ type: 'SET_GENRE', payload: this.props.match.params.id })
    }
    render() {
        return (
            <>
                    <h3>{this.props.match.params.id}</h3>
                    {this.props.reduxState.genreMovie.map((movie)=>{
                    return(
                    <Movie movie = {movie}/>
                    )
                    })}
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Genre);