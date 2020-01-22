import React from 'react';
import { NavLink } from 'react-router-dom';
import './pages.css';

const Landing = () => {
  return (
    <div className="page">
      <NavLink exact to="/dashboard" activeClassName="active" >
        <span aria-label="Navigation link">To Dashboard</span>
      </NavLink>
    </div>
  );
};

export default Landing;
