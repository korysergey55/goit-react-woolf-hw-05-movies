import { Suspense, lazy } from 'react';
import styles from './styles.module.css'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

import Header from 'components/header/Header';
import Loader from 'components/loader/Loader';
import Footer from 'components/footer/Footer';

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
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieID' element={<MovieDetailsPage />} >
            <Route path='cast' element={<CastPage />} />
            <Route path='reviews' element={<ReviewsPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer />
    </div>
  );
};
