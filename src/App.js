import React, { Component } from 'react';
import AddMoviePage from "./components/AddMoviePage";
import MoviesFilters from "./components/MoviesFilters";
import MoviesList from "./components/MoviesList";
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
class App extends Component {
  render () {
    return (
      <div>
        <header>
          HackerRank React Quiz
        </header>
        <Provider store={store}>
          <AddMoviePage />
        </Provider>
        <Provider store={store}>
         <MoviesFilters />
        </Provider>
        <Provider store={store}>
          <MoviesList />
        </Provider>
      </div>
    );
  }
}

export default App;
