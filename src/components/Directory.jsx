import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Directory.module.css";

const Directory = () => {
  const alphabets = [];

  for (let i = 65; i <= 90; i++) {
    alphabets.push(String.fromCharCode(i));
  }

  return (
    <div className={styles.directory}>
      <ul>
        {alphabets.map((item) => {
          return (
            <li key={item}>
              <NavLink
                className={(navData) => (navData.isActive ? styles.active : "")}
                to={`/directory/${item}`}
              >
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Directory;
