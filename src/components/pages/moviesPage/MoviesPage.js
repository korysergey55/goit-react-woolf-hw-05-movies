import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './styles.module.css'
import sprite from '../../../sourses/icons/sprite.svg'

const MoviesPage = () => {
  const [state, setState] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get("query");
  // console.log('query', query)

  useEffect(() => {
    if (!query) return
    console.log('useEffect-query', query)
  }, [state])

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
    </div>
  );
}

export default MoviesPage;