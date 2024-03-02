import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { useParams } from 'react-router-dom';
import { geCastAPI } from 'api/api';
import defaultImg from '../../../sourses/images/products/default.jpg'

const CastPage = () => {
  const { movieID } = useParams()
  const [casts, setCasts] = useState([])

  useEffect(() => {

    const getCastInfo = async () => {
      try {
        const response = await geCastAPI(movieID)
        if (response) {
          setCasts(response.cast)
        }
      }
      catch (error) {
        console.log(error)
      }
    }

    if (movieID) {
      getCastInfo()
    }
  }, [movieID])

  return (
    <div className={styles.container}>
      {casts &&
        <ul className={styles.list}>
          {casts.map((cast) => (
            <li key={cast.id} className={styles.item}>
              <p className={styles.text}>{cast.character ? cast.character : "Actor"}</p>
              <div className={styles.imageWripper}>
                <img
                  src={cast.profile_path ? `https://image.tmdb.org/t/p/w92/${cast.profile_path}` : defaultImg}
                  alt="actor"
                  className={styles.image}
                />
              </div>
            </li>
          ))}
        </ul>}
    </div >
  );
}

export default CastPage;