
//Filters Reducer
const filtersReducerDefaultState = {
  movieName: '',
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_MOVIE_NAME_FILTER':
      return {
        ...state,
        movieName: action.movieName
      };
    default:
      return state;
  }
};

export default filtersReducer;
