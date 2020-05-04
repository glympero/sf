import React from 'react';
import MovieForm from './MovieForm';
import { addMovie } from '../actions/movies';
import { connect } from 'react-redux';

export class AddMoviePage extends React.Component {

  onSubmit = (movie) => {
    this.props.addMovie(movie)
  }

  render(){
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Georgios Lymperopoulos</h1>
          </div>
        </div>
        <div className='content-container'>
          <MovieForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (movie) => {
      dispatch(addMovie(movie));
    }
  }
}

export default connect(null, mapDispatchToProps)(AddMoviePage);
