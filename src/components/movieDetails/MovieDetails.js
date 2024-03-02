import React from 'react'
import styles from './styles.module.css'
import defaultImg from '../../sourses/images/products/default.jpg'

const MovieDetails = ({ data }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={data.poster_path ? `https://image.tmdb.org/t/p/w300/${data.poster_path}` : defaultImg}
        alt={data.title}
      />
      <ul className={styles.list}>
        <li className={styles.item}>
          <h2 className={styles.title}>
            {data.title} {data.release_date}
          </h2>
          <p className={styles.text}>
            User score: {(data.vote_average * 10).toFixed()} %
          </p>
        </li>
        <li className={styles.item}>
          <h2 className={styles.title}>Overview</h2>
          <p className={styles.text}>{data.overview}</p>
        </li>
        <li className={styles.item}>
          <h2 className={styles.title}>Genres</h2>
          <ul className={styles.genderList}>
            {data.genres?.map((item) => (
              <li key={item.id} className={styles.item}>
                <p className={styles.text}>{item.name}</p>
              </li>
            ))}
          </ul>
        </li>

      </ul>
    </div>
  );
}

export default MovieDetails;