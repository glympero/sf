const moviesDefaultState = [];

const movies = (state = moviesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      const i = state.findIndex(_item => _item.name === action.movie.name);
      if(i > -1) {
        const newState = [ ...state ];
        newState[i] = action.movie;
        return newState;
      } else {
        return [...state, action.movie ];
      }
    default:
      return state;
  }
};

export default movies;
