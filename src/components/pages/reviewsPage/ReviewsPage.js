import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

import { geReviewsAPI } from 'api/api';
import { useParams } from 'react-router-dom';


const ReviewsPage = () => {
  const { movieID } = useParams()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getReviewsInfo = async () => {
      try {
        const response = await geReviewsAPI(movieID)
        if (response) {
          setReviews(response.results)
        }
      }
      catch (error) {
        console.log(error)
      }
    }

    if (movieID) {
      getReviewsInfo()
    }
  }, [movieID])

  return (
    <ul className={styles.list}>
      {reviews.length ? (reviews.map((review) => (
        <li className={styles.item} key={review.id}>
          <h3 className={styles.title}>Author: {review.author}</h3>
          <p className={styles.text}>{review.content}</p>
        </li>))
      ) : (
        <p className={styles.text}>We dont hawe any reviws for this muvie!</p>
      )}
    </ul>
  );
}

export default ReviewsPage;