import React from 'react';
import { NavLink } from 'react-router-dom';
import './pages.css';
import Button from '../components/button/button';

const Landing = () => {
  return (
    <div className="page">
      <NavLink exact to="/results" activeClassName="active">
        <Button aria-label="Navigation link" text={"To Results"} />
      </NavLink>
    </div>
  );
};

export default Landing;
