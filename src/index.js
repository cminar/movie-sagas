import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('MOVIES', getMovies);
    yield takeEvery('SINGLE_MOVIE', getMovie);
    yield takeEvery('EDIT_MOVIE', editMovie);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const movie = (state = [], action) => {
    console.log('action.payload', action.payload)
    switch (action.type) {
        case 'SET_SINGLE':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

function* editMovie(action){
    try {
      yield axios.put('/movie', action.payload);
      console.log('edit movie put', action.payload)
    } catch (err){
      console.log('editmovie ERROR:',err);
    }
}


function* getMovies(action) {
    try{
        const results = yield axios.get('/movie')
        yield put({type: 'SET_MOVIES',payload: results.data})
        console.log(results.data);
    }catch (error){
        console.lof('error in getMovies',error)
    }
}

function* getMovie(action) {
    try{
        const response = yield axios.get(`/movie/package/${action.payload}`);
        console.log('response get', response.data)
        yield put({type: 'SET_SINGLE',payload: response.data})
        console.log(response.data)
    }catch (error){
        console.log('error in getMovie', error)
    }
}



// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
