import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Validar que la contraseña tenga números, letras y al menos una mayúscula
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError('La contraseña debe tener al menos una mayúscula, una letra y un número.');
      return;
    }

    // Obtener los usuarios del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el correo o el nombre de usuario ya están registrados
    const userExists = users.some(user => user.email === email || user.username === username);
    if (userExists) {
      setError('El correo electrónico o el nombre de usuario ya están registrados.');
      return;
    }

    // Guardar el nuevo usuario
    users.push({ firstName, lastName, email, username, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Redirigir a la página de inicio de sesión
    navigate('/login');
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Registrarse</h2>
        {error && <p className="error-message">{error}</p>}
        <label htmlFor="firstName">Nombre</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label htmlFor="lastName">Apellidos</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
}

export default Register;
