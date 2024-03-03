import { Suspense, lazy } from 'react';
import styles from './styles.module.css'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import Header from 'components/header/Header';
import Loader from 'components/loader/Loader';
import Footer from 'components/footer/Footer';


// import HomePage from 'components/pages/homePage/HomePage';
// import MoviesPage from 'components/pages/moviesPage/MoviesPage';
// import MovieDetailsPage from 'components/pages/movieDetailsPage/MovieDetailsPage';
// import NotFoundPage from 'components/pages/notFoundPage/NotFoundPage';
// import ReviewsPage from 'components/pages/reviewsPage/ReviewsPage';
// import CastPage from 'components/pages/castPage/CastPage';

const HomePage = lazy(() => import('components/pages/homePage/HomePage'))
const MoviesPage = lazy(() => import('components/pages/moviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('components/pages/movieDetailsPage/MovieDetailsPage'))
const CastPage = lazy(() => import('components/pages/castPage/CastPage'))
const ReviewsPage = lazy(() => import('components/pages/reviewsPage/ReviewsPage'))
const NotFoundPage = lazy(() => import('components/pages/notFoundPage/NotFoundPage'))

export const App = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact={true} path={'/'} element={<HomePage />} />
          <Route exact={true} path={'/movies'} element={<MoviesPage />} />
          <Route exact={true} path={'/movies/:movieID'} element={<MovieDetailsPage />} >
            <Route exact={true} path={'cast'} element={<CastPage />} />
            <Route exact={true} path={'reviews'} element={<ReviewsPage />} />
          </Route>
          <Route exact={true} path={'*'} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer />
    </div>
  );
};
