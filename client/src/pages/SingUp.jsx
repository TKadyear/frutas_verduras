import React, { useState } from 'react';
import Footer from '../components/Footer'; 
import fondo2 from '../assets/fondo2.png';  

function Signup() {
  // Estados para los campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registrando usuario:', { name, email, password });
  };


  
  return (
    <div
      className="bg-cover bg-center h-screen flex flex-col items-center justify-between"
      style={{ backgroundImage: `url(${fondo2})` }}  // Fondo de la página
    >
      {/* Formulario de Registro */}
      <div className="bg-green-600 bg-opacity-75 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mt-12 sm:mt-20">
        <h2 className="text-white text-3xl sm:text-4xl mb-6 text-center">Registrarse</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="text-white">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Escribe tu nombre"
              className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="text-white">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Escribe tu correo electrónico"
              className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="text-white">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Escribe tu contraseña"
              className="w-full p-3 rounded-md bg-white text-black placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg mt-4 bg-orange-600 text-white font-semibold hover:bg-orange-700 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
