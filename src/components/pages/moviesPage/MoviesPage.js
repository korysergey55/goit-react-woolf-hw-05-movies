import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import sprite from '../../../sourses/icons/sprite.svg'

import { useSearchParams } from 'react-router-dom'
import { geMuviesQueryAPI } from 'api/api'
import MovieList from 'components/movieList/MovieList'


const MoviesPage = () => {
  const [state, setState] = useState('')
  const [muvies, setMuvies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get("query");

  useEffect(() => {
    const getMuvieByQuery = async () => {
      try {
        const response = await geMuviesQueryAPI(query)
        if (response) {
          setMuvies(response.results)
        }
      }
      catch (error) {
        console.log(error)
      }
    }

    if (query) {
      getMuvieByQuery()

    }

  }, [query])

  const handleChange = (evt) => {
    setState(evt.target.value)
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (state) {
      setSearchParams({ query: state })
    }
    setState('')
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          name='search'
          value={state}
          type="text"
          placeholder="Search muvies"
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          <svg className={styles.icon} width="24" height="24" aria-label="icon-search">
            <use href={sprite + '#icon-park-search'}></use>
          </svg>
        </button>
      </form>
      {muvies && < MovieList items={muvies} />}
    </div>
  );
}

export default MoviesPage;