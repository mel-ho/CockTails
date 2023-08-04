import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/random"
            >
              Cocktail of the Day
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/directory/a"
            >
              Cocktail Directory
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/filter"
            >
              Filter by Preferences
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/search"
            >
              Search Cocktail
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
