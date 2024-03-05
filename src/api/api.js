import axios from 'axios'
import { toast } from 'react-toastify'

const KEY = "6e40e6f870b3f7c3f9fcc54179d0bae2";
const BASE_URL = 'https://api.themoviedb.org/3/'
const searchParams = new URLSearchParams({
  api_key: KEY,
});

const getTrendingMoviesAPI = async (page) => {
  searchParams.set('page', page)
  try {
    const { data } = await axios.get(`${BASE_URL}trending/movie/day?${searchParams}`, {
      headers: {
        Accept: "application/json",
      },
    })
    return data
  }
  catch (error) {
    toast.error(`${error.message}`, {
      theme: 'colored',
    })
  }
}
const getMovieByIdAPI = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}?${searchParams}`)
    return data
  }
  catch (error) {
    toast.error(`${error.message}`, {
      theme: 'colored',
    })
  }
}

const geCastAPI = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}/credits?${searchParams}`)
    return data
  }
  catch (error) {
    toast.error(`${error.message}`, {
      theme: 'colored',
    })
  }
}

const geReviewsAPI = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/movie/${id}/reviews?${searchParams}`)
    return data
  }
  catch (error) {
    toast.error(`${error.message}`, {
      theme: 'colored',
    })
  }
}

const geMuviesQueryAPI = async (query) => {
  // searchParams.set('query', query)
  try {
    const { data } = await axios.get(`${BASE_URL}search/movie?${searchParams}&query=${query}`)
    if (data.results.length === 0) {
      toast.error(`We didn't find any films based on your request.`, {
        theme: 'colored',
      })
    }
    return data
  }
  catch (error) {
    toast.error(`${error.message}`, {
      theme: 'colored',
    })
  }
}


export { getTrendingMoviesAPI, getMovieByIdAPI, geCastAPI, geReviewsAPI, geMuviesQueryAPI }