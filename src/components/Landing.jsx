import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div>
        <NavLink
          className={(navData) => (navData.isActive ? styles.active : "")}
          to="/random"
        >
          <img src="CTicon.ico" className="icon" alt="" />
        </NavLink>
      </div>
      <div className="centered">
        <NavLink
          className={(navData) => (navData.isActive ? styles.active : "")}
          to="/random"
        >
          Click to get a drink!
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
