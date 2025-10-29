import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenida a la App de Cursos 🎓</h1>
      <p>Explora las especialidades disponibles:</p>

      <nav className="home-nav">
        <ul>
          <li><Link to="/fp">Formación Profesional</Link></li>
          <li><Link to="/idiomas">Idiomas</Link></li>
          <li><Link to="/infantil-primaria">Infantil y Primaria</Link></li>
          <li><Link to="/informatica">Informática</Link></li>
          <li><Link to="/cursos">Ver todos los cursos</Link></li>
          <li><Link to="/usuarios">Ver usuarios registrados</Link></li>
          <li><Link to="/inscripcion">Inscribirse en un curso</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
