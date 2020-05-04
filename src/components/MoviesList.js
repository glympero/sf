import React from 'react';
import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';

import selectMovies from '../selectors/movies';

export const ExpenseList = (props) => {
  return (
    <div className='content-container'>
      <table>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Rating</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {
            props.movies.length === 0 ? (
              <tr id="no-result">
                <td colSpan="3">No movies Found</td>
              </tr>
            ) : (
              props.movies.map((movie, index) => {
                return (
                  <MovieListItem key={index}  {...movie} />
                );
              })
            )
          }
        </tbody>
      </table>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    movies: selectMovies(state.movies, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);
