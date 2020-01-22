import React from 'react';
import { NavLink } from 'react-router-dom';
import './pages.css';

const Landing = () => {
  return (
    <div className="page">
      Landing
      <NavLink exact to="/dashboard" activeClassName="active" >
        <span aria-label="Navigation link">Dashboard</span>
      </NavLink>
    </div>
  );
};

export default Landing;
