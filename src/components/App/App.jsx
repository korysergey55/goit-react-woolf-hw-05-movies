import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from 'components/loader/Loader';
import Header from 'components/header/Header';


const HomePage = lazy(() => import('components/pages/homePage/HomePage'))
const MoviesPage = lazy(() => import('components/pages/moviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('components/pages/movieDetailsPage/MovieDetailsPage'))
const CastPage = lazy(() => import('components/pages/castPage/CastPage'))
const ReviewsPage = lazy(() => import('components/pages/reviewsPage/ReviewsPage'))
const NotFoundPage = lazy(() => import('components/pages/notFoundPage/NotFoundPage'))
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'))

export const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<SharedLayout />} >
            <Route index element={<HomePage />} />
            <Route path='movies' element={<MoviesPage />} />
            <Route path='movies/:movieID' element={<MovieDetailsPage />} >
              <Route path='cast' element={<CastPage />} />
              <Route path='reviews' element={<ReviewsPage />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
