import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
 
class MovieDescription extends Component {

    state = {
        movie: [],
        tempOne: '',
        tempTwo: ''
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
        this.props.history.push(`/`);
    }

    handleSubmit = (event) => {
        console.log('temps before', this.state.tempOne, this.state.tempTwo)
        let edit = {
            title: this.state.tempOne,
            description: this.state.tempTwo,
        }
        console.log('temps after', this.state.tempOne, this.state.tempTwo)
        this.props.dispatch({type: 'EDIT_MOVIE', payload: edit})
        this.props.history.push('/');
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            tempOne: event.target.value,
        })
    }

    handleChangeTwo = (event) => {
        this.setState({
            ...this.state,
            tempTwo: event.target.value
        })
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
                    <input onChange={(event) => this.handleChange(event)} placeholder="Title"></input>   <input onChange={(event) => this.handleChangeTwo(event)} placeholder="Description"></input>
                    <button onClick={(event) => this.handleSubmit(event)}>Submit</button>   <button onClick={this.handleClick}>All Movies</button>
                    {/* <h2>{this.props.reduxState.movie.title}</h2> */}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
  })
  
export default withRouter(connect(putReduxStateOnProps)(MovieDescription));