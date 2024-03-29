import React, { useState } from 'react'
import styles from './styles.module.css'
import sprite from '../../sourses/icons/sprite.svg'
import { useSearchParams } from 'react-router-dom'

const SearchForm = () => {
  const [state, setState] = useState('')
  const [, setSearchParams] = useSearchParams()

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
  );
}

export default SearchForm;