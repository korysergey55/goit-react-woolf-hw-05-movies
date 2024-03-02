import React from 'react'
import { Link } from 'react-router-dom';
import styles from './styles.module.css'
import defaultImg from '../../../sourses/images/products/default.jpg'

const MovieListItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <Link
        className={styles.navLink}
        to={`/movies/${item.id}`}
        key={item.id}
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
    </li>
  );
}

export default MovieListItem;