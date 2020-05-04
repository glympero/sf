import { createStore, combineReducers } from 'redux';
import moviesReducer from '../reducers/movies';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      filters: filtersReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

//When we import configureStore to another file, it will automatically return the store from export default


