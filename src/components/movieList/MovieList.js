import React from 'react'
import styles from './styles.module.css'
import { v4 as uuidv4 } from 'uuid';
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