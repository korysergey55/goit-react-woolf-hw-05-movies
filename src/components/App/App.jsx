import styles from './styles.module.css'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import Header from 'components/header/Header';
import HomePage from 'components/pages/homePage/HomePage';
import MoviesPage from 'components/pages/moviesPage/MoviesPage';
import MovieDetailsPage from 'components/pages/movieDetailsPage/MovieDetailsPage';
import NotFoundPage from 'components/pages/notFoundPage/NotFoundPage';
import ReviewsPage from 'components/pages/reviewsPage/ReviewsPage';
import CastPage from 'components/pages/castPage/CastPage';


export const App = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Routes>
        <Route exact={true} path={'/'} element={<HomePage />} />
        <Route exact={true} path={'/movies'} element={<MoviesPage />} />
        <Route exact={true} path={'/movies/:movieID'} element={<MovieDetailsPage />} >
          <Route exact={true} path={'cast'} element={<CastPage />} />
          <Route exact={true} path={'reviews'} element={<ReviewsPage />} />
        </Route>
        <Route exact={true} path={'*'} element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};
