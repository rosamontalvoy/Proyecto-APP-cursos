import React, { useState, useEffect } from 'react';

function Inscripcion() {
  const [usuarios, setUsuarios] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [userId, setUserId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsuarios(data));

    fetch('http://localhost:5000/api/cursos')
      .then(res => res.json())
      .then(data => setCursos(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/users/${userId}/inscribir/${courseId}`, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        setMensaje(data.msg || '✅ Inscripción realizada');
        setUserId('');
        setCourseId('');
      })
      .catch(err => {
        console.error('Error al inscribir:', err);
        setMensaje('❌ Error al inscribir. Inténtalo de nuevo.');
      });
  };

  return (
    <div>
      <h2>📝 Inscripción a cursos</h2>
      <form onSubmit={handleSubmit}>
        <label>Selecciona usuario:</label>
        <select value={userId} onChange={(e) => setUserId(e.target.value)} required>
          <option value="">-- Usuario --</option>
          {usuarios.map(user => (
            <option key={user.id} value={user.id}>
              {user.nombre} ({user.email})
            </option>
          ))}
        </select>

        <label>Selecciona curso:</label>
        <select value={courseId} onChange={(e) => setCourseId(e.target.value)} required>
          <option value="">-- Curso --</option>
          {cursos.map(curso => (
            <option key={curso.id} value={curso.id}>
              {curso.nombre}
            </option>
          ))}
        </select>

        <button type="submit">Inscribirse</button>
      </form>

      {mensaje && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{mensaje}</p>}
    </div>
  );
}

export default Inscripcion;
