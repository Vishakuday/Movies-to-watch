import { combineReducers } from 'redux';
import movies from './reducer_movies';

const rootReducer = combineReducers({
  movies: movies
});

export default rootReducer;
