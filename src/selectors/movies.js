
const getVisibleMovies = (movies, filters) => {
  const {movieName = ''} = filters

  let filter = '';

  if(movieName.length > 2){
    filter = movieName;
  } else {
    filter = '';
  }
  return movies.filter(movie => {
    const textMatched = typeof movieName === 'string' && movie.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
    return textMatched
  }).sort((a, b) => {
      return convertDuration(a.duration) <convertDuration(b.duration) ? 1 : -1;
  });
};

const convertDuration = (duration) => {
  let timeFormat = duration.charAt(duration.length - 1);
  let dur = duration.substring(0, duration.length - 1);
  let number =  Number(dur);
  if(timeFormat === 'h') {
    number = Number(dur) * 60;
  }
  return number;

}

export default getVisibleMovies;
