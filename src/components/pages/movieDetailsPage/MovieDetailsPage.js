import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'

import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieByIdAPI } from 'api/api';

import Loader from 'components/loader/Loader';
import MovieDetails from 'components/movieDetails/MovieDetails';

const MovieDetailsPage = () => {
  const { movieID } = useParams()
  const [muvieInfo, setMovieInfo] = useState({})
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const goBack = useRef(location.state?.from ?? '/')

  const handleBack = () => {
    navigate(goBack.current);
  };

  useEffect(() => {

    const getMuvie = async () => {
      try {
        setLoading(true)
        const response = await getMovieByIdAPI(movieID)
        if (Object.keys(response).length > 0) {
          setMovieInfo(response)
          setLoading(false)
        }
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
        onClick={handleBack}
      >
        Go Back
      </button>

      {Object.keys(muvieInfo).length > 0
        && <MovieDetails data={muvieInfo} />}

      {Object.keys(muvieInfo).length > 0
        &&
        <ul className={styles.navList}>
          <li className={styles.item}>
            <NavLink
              to={'cast'}
              className={(navData) => navData.isActive ? styles.active : styles.navLink}
              state={{ from: location }}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles}>
            <NavLink
              to={'reviews'}
              className={(navData) => navData.isActive ? styles.active : styles.navLink}
              state={{ from: location }}
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