import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

import { getTrendingMoviesAPI } from 'api/api'

import MovieList from 'components/movieList/MovieList'
import Loader from 'components/losder/Loader'

const HomePage = () => {
  const [muvies, setMuvies] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const getMovies = async () => {
      try {
        setLoading(true)
        const res = await getTrendingMoviesAPI(page)
        if (res) {
          setMuvies((prev) => [...prev, ...res.results])
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

    getMovies()
  }, [page])

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  return (
    <div className={styles.container}>

      <h2 className={styles.title}>Tranding today</h2>

      {loading && <Loader />}

      {muvies && <MovieList items={muvies} />}

      {muvies.length > 0 && <button
        className={styles.button}
        type='button'
        onClick={handleLoadMore}
      >
        Load more
      </button>}

    </div>
  );
}

export default HomePage;