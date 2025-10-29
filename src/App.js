import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Informatica from './pages/Informatica';
import Idiomas from './pages/Idiomas';
import FP from './pages/FP';
import InfantilPrimaria from './pages/InfantilPrimaria';
import Cursos from './pages/Cursos';
import Usuarios from './pages/Usuarios';
import Inscripcion from './pages/Inscripcion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informatica" element={<Informatica />} />
        <Route path="/idiomas" element={<Idiomas />} />
        <Route path="/fp" element={<FP />} />
        <Route path="/infantil-primaria" element={<InfantilPrimaria />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
      </Routes>
    </Router>
  );
}

export default App;
