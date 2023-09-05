// Dependencies
import React from 'react';
// import { Icon } from 'react-materialize';
import { NavLink } from 'react-router-dom';
// Internals
import './index.css';
import Button from '../../../Button';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => (
  <nav className="navbar">
    <div className="nav-links">
      <ul>
        <li><NavLink  className="nav-link" exact="true" to="/">Home</NavLink></li>
        <li><NavLink  className="nav-link" to="/women">Women</NavLink></li>
        <li><NavLink  className="nav-link" to="/men">Men</NavLink></li>
      </ul>
    </div>
    <div className="shopping-cart">
      <NavLink to="/cart"><Button><FontAwesomeIcon icon={faCartShopping} /></Button></NavLink>
    </div>
  </nav>
);

export default Navbar;
