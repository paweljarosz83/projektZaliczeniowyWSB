import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="topMenuButton">

            <li><NavLink to="/" exact activeClassName="activeLink">O NAS</NavLink></li>
            <li><NavLink to="/catalog" activeClassName="activeLink">KATALOG</NavLink></li>
            <li><NavLink to="/galery" activeClassName="activeLink">GALERIA</NavLink></li>
            <li><NavLink to="/contact" activeClassName="activeLink">KONTAKT</NavLink></li>
            <li><NavLink to="/localize" activeClassName="activeLink">LOKALIZACJA</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>









  );
};