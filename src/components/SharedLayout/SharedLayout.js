
import { Outlet } from "react-router-dom";

import Header from "components/header/Header";
import Footer from "../footer/Footer";
import Loader from '../loader/Loader';

import styles from './styles.module.css'

const SharedLayout = () => {
  return (
    <div className={styles.sharedLayoutContainer}>
      <Outlet />
      <Footer />
    </div>
  );
};
export default SharedLayout