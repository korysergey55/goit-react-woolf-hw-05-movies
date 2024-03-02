import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { getMovieByIdAPI } from 'api/api';

import Loader from 'components/loader/Loader';
import MovieDetails from 'components/movieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { movieID } = useParams()
  const [muvieInfo, setMovieInfo] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const getMuvie = async () => {
      try {
        setLoading(true)
        const res = await getMovieByIdAPI(movieID)
        setMovieInfo(res)
        setLoading(false)
      }
      catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false)
      }
    }

    if (movieID) {
      getMuvie()
    }
  }, [movieID])


  return (
    <div className={styles.container}>
      {loading && <Loader />}
      <button
        className={styles.button}
        type='button'
        onClick={() => navigate('/')}
      >
        Go Back
      </button>

      {muvieInfo && <MovieDetails data={muvieInfo} />}

      {muvieInfo && <ul className={styles.navList}>
        <li className={styles.item}>
          <NavLink
            to={'cast'}
            className={(navData) => navData.isActive ? styles.active : styles.navLink}
          >
            Cast
          </NavLink>
        </li>
        <li className={styles}>
          <NavLink
            to={'reviews'}
            className={(navData) => navData.isActive ? styles.active : styles.navLink}
          >
            Reviews
          </NavLink>
        </li>
      </ul>}
      <Outlet />
    </div>

  );
}

export default MovieDetailsPage;