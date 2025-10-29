import React, { useState } from 'react';

function Usuarios() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email })
    })
      .then(res => res.json())
      .then(user => {
        setMensaje(`✅ Registro exitoso. Estás registrada como ${user.nombre}`);
        setNombre('');
        setEmail('');
      })
      .catch(err => {
        console.error('Error al registrar usuario:', err);
        setMensaje('❌ Hubo un error al registrar. Inténtalo de nuevo.');
      });
  };

  return (
    <div>
      <h2>👥 Registro de usuarios</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Registrar</button>
      </form>

      {mensaje && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{mensaje}</p>}
    </div>
  );
}

export default Usuarios;
