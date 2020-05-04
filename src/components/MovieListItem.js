import React from 'react';

const MovieListItem = ({id, name, rating, duration }) => {
  return (
    <tr>
      <td >{name}</td>
      <td >{rating}</td>
      <td >{duration}</td>
    </tr>
  );
};

export default MovieListItem;
