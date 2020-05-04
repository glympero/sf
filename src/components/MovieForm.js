import React from 'react';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating:  '',
      duration: '',
      error: ''
    }
  }

  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({
      name
    }));
  }

  onDurationChange = (e) => {
    const duration = e.target.value;
    this.setState(() => ({
      duration
    }));
  }

  checkDurationFormat = (duration) => {
    let timeFormat = duration.charAt(duration.length - 1);
    if(timeFormat === 'm' || timeFormat === 'h') {
      return true
    }
    return false;
  }

  onRatingChange = (e) => {
    const rating = e.target.value;
    if(!rating || rating.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        rating
      }));
    }
  }

  onSubmit = (e) => {
    const { name, rating, duration } = this.state;
    e.preventDefault();
    if(!name || !rating || !duration) {
      this.setState(() => ({
        error: `Please provide Movie name, Rating and Duration`
      }));
    }else if(!this.checkDurationFormat(duration)){
      this.setState(() => ({
        error: `Invalid Duration Format`
      }));
    }else {
      this.setState(() => ({
        name: '',
        rating:  '',
        duration: '',
        error: ''
      }));

      // const rating = parseFloat(this.state.rating, 10) * 100;
      this.props.onSubmit({ //this is the function passed from addmovie component
        name,
        rating,
        duration,
      });
    }
  }

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        { !!this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input id="name-input" className='text-input' type='text' value={this.state.name} onChange={this.onNameChange} placeholder='Movie Name' autoFocus/>
        <input id="rating-input" className='text-input' type='text' value={this.state.rating} onChange={this.onRatingChange} placeholder='Rating' />
        <input id="duration-input" className='text-input' type='text' value={this.state.duration} onChange={this.onDurationChange} placeholder='Duration' />
        <div>
          <button id="submit-button" className='button'
            //disabled={!this.state.description || !this.state.amount}
          >Submit</button>
        </div>
      </form>
    );
  }
}

export default MovieForm;
