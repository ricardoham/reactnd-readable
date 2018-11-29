import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/">Home</NavLink>
    <NavLink className="navbar__link" to="/react">React Posts</NavLink>
    <NavLink className="navbar__link" to="/redux">Redux Posts</NavLink>
    <NavLink className="navbar__link" to="/udacity">Udacity Posts</NavLink>
  </nav>
);

export default Navbar;
