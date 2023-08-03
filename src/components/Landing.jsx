import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="centered">
        <NavLink
          className={(navData) => (navData.isActive ? styles.active : "")}
          to="/random"
        >
          <img src="https://i.imgur.com/Rt3DuNX.jpg" alt="" />
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
