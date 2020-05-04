import React from 'react';
import { connect } from 'react-redux';
import { setMovieNameFilter } from '../actions/filters';

class MoviesFilters extends React.Component {

  render() {
    return (
      <div className='content-container'>
        <div className='input-group'>
          <div className='input-group__item'>
            <input
              id="search-input"
              type='text'
              className='text-input'
              placeholder='Search Movies'
              value={this.props.filters.movieName}
              onChange={(event) => {
                this.props.dispatch(setMovieNameFilter(event.target.value));
              }} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(MoviesFilters);

