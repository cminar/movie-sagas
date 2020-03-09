import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
 
class MovieDescription extends Component {

    state = {
        movie: [],
    }

    componentDidMount(){
        console.log('MOVIE',this.props.reduxState.movie)
        this.single();
    }

    single = () => {
        this.props.dispatch({type: 'SINGLE_MOVIE', payload: this.props.match.params.id})
        console.log('redux in single', this.props.reduxState.movie);
        this.list();
    }

    list = () => {
        console.log('reduxState before', this.props.reduxState.movie);
        this.setState({movie: this.props.reduxState.movie})
        console.log('in list state: ',this.state.movie)
        console.log('reduxState after', this.props.reduxState.movie)

    }

    
    handleClick = () => {
        this.props.history.push(`/`)
    }

    handleEdit = () => {
        this.props.history.push('/edit')
    }

    render() {
        return (
            <div className='movie'>
                    {this.state.movie.map((movie) => {
                        return (
                            <>
                                <h3>{movie.title}</h3>
                                <img src={movie.poster} />
                                <br></br>
                                <p>{movie.description}</p>
                            </>
                        )
                    })}
                    <br></br>
                    <button onClick={this.handleEdit}>Edit</button><button onClick={this.handleClick}>All Movies</button>
                    {/* <h2>{this.props.reduxState.movie.title}</h2> */}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
  
export default withRouter(connect(putReduxStateOnProps)(MovieDescription));