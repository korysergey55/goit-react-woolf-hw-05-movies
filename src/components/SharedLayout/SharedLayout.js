import { Suspense } from 'react';
import { Outlet } from "react-router-dom";

import Header from "components/header/Header";
import Footer from "../footer/Footer";
import Loader from '../loader/Loader';

import styles from './styles.module.css'

const SharedLayout = () => {
  return (
    <div className={styles.sharedLayoutContainer}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};
export default SharedLayout