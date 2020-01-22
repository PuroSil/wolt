import React from 'react';
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      Landing
      <NavLink exact to="/dashboard" activeClassName="active" >
        <span aria-label="Navigation link">Dashboard</span>
      </NavLink>
    </div>
  );
};

export default Landing;
