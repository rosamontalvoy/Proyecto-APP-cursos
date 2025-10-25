import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Informatica from './pages/Informatica';
import Idiomas from './pages/Idiomas';
import FP from './pages/FP';
import InfantilPrimaria from './pages/InfantilPrimaria';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informatica" element={<Informatica />} />
        <Route path="/idiomas" element={<Idiomas />} />
        <Route path="/fp" element={<FP />} />
        <Route path="/infantil-primaria" element={<InfantilPrimaria />} />
      </Routes>
    </Router>
  );
}

export default App;
