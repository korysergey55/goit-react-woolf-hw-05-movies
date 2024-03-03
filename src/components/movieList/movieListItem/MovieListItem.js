import React from 'react'
import styles from './styles.module.css'
import defaultImg from '../../../sourses/images/products/default.jpg'

import { Link, useLocation } from 'react-router-dom';

const MovieListItem = ({ item }) => {
  const location = useLocation()

  return (
    <li className={styles.item}>
      <Link
        className={styles.navLink}
        to={`/movies/${item.id}`}
        state={{ from: location }}
      >
        <img
          className={styles.image}
          src={
            item.poster_path
              ? `https://image.tmdb.org/t/p/w300/${item.poster_path}`
              : defaultImg
          }
          alt={item.title}
        />
      </Link >
    </li >
  );
}

export default MovieListItem;