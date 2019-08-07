import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import './Navbar.css';

const Navbar = () => (
  <header className="Navbar">
    <div className="Navbar__Logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="Navbar__Menu">
      <ul>
        <li>
          <Link to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/pet-list">
            Listado
          </Link>
        </li>
        <li>
          <Link to="/pet-data">
            Datos
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Navbar;
