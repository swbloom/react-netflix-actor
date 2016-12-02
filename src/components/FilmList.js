import React from 'react';
import Film from './Film.js';

const FilmList = (props) => {
  const films = props.films.map((film) => {
    return <Film key={film.show_id} poster={film.poster} title={film.show_title} summary={film.summary} />
  });

  return (
    <ul>{films}</ul>
  )
};

module.exports = FilmList;
