import React, { useEffect, useState } from 'react';

function Cursos() {
  const [cursosPorCategoria, setCursosPorCategoria] = useState({});

  useEffect(() => {
    fetch('http://localhost:5000/api/cursos')
      .then(res => res.json())
      .then(data => {
        const agrupados = {};
        data.forEach(curso => {
          const categoria = curso.Category?.nombre || 'Sin categoría';
          if (!agrupados[categoria]) agrupados[categoria] = [];
          agrupados[categoria].push(curso);
        });
        setCursosPorCategoria(agrupados);
      })
      .catch(err => console.error('Error al cargar cursos:', err));
  }, []);

  return (
    <div>
      <h2>📘 Catálogo de cursos</h2>
      {Object.entries(cursosPorCategoria).map(([categoria, cursos]) => (
        <div key={categoria} style={{ marginBottom: '2rem' }}>
          <h3>{categoria}</h3>
          <ul>
            {cursos.map(curso => (
              <li key={curso.id}>
                <strong>{curso.nombre}</strong> — {curso.descripcion}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Cursos;
