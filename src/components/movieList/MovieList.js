import React from 'react'
import styles from './styles.module.css'

import MovieListItem from './movieListItem/MovieListItem';

const MovieList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <MovieListItem item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default MovieList;