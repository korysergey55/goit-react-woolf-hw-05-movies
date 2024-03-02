import React from 'react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to={'/'}
            className={(navData) => navData.isActive ? styles.active : styles.navLink}
          >
            Home
          </NavLink>
        </li>
        <li className={styles}>
          <NavLink
            to={'/movies'}
            className={(navData) => navData.isActive ? styles.active : styles.navLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;