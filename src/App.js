import React, { Component } from 'react';
import AddMoviePage from "./components/AddMoviePage";
import MoviesFilters from "./components/MoviesFilters";
import MoviesList from "./components/MoviesList";
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <header>
          HackerRank React Quiz
        </header>
        <AddMoviePage />
        <MoviesFilters />
        <MoviesList />
      </div>
    );
  }
}

export default App;
