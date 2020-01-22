import React from 'react';
import { NavLink } from 'react-router-dom';
import './pages.css';

const Landing = () => {
  return (
    <div className="page">
      <NavLink exact to="/results" activeClassName="active" >
        <span aria-label="Navigation link">To Results</span>
      </NavLink>
    </div>
  );
};

export default Landing;
