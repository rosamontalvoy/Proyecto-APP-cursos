
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/informatica">Informática</Link></li>
        <li><Link to="/idiomas">Idiomas</Link></li>
        <li><Link to="/fp">Formación Profesional</Link></li>
        <li><Link to="/infantil-primaria">Infantil y Primaria</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
