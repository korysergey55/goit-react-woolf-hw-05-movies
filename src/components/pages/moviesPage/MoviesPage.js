import React, { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import { geMuviesQueryAPI } from 'api/api'

import MovieList from 'components/movieList/MovieList'
import SearchForm from 'components/searchForm/SearchForm'
import Container from 'components/container/Container'

const MoviesPage = () => {
  const [muvies, setMuvies] = useState([])
  const [searchParams] = useSearchParams()
  const query = searchParams.get("query");

  useEffect(() => {
    const getMuvieByQuery = async () => {
      try {
        const response = await geMuviesQueryAPI(query)
        if (response.results.length > 0) {
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


  return (
    <Container>
      <SearchForm />
      {muvies.length > 0 && < MovieList items={muvies} />}
    </Container>
  );
}

export default MoviesPage;