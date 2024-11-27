import React, { useState } from 'react';

const Login = () => {
  // Estado para el formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Estado para los errores
  const [errors, setErrors] = useState({});

  // Maneja el cambio de los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Valida los campos del formulario
  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo no válido';
    }
    if (!formData.password) {
      newErrors.password = 'La contraseña es requerida';
    }
    return newErrors;
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log(formData);
      setErrors({});
      setFormData({
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className="bg-white p-8 max-w-md mx-auto mt-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Iniciar sesión</h2>
      
      {/* Formulario de Login */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          className={`p-2 border border-gray-300 rounded text-[#C1A881] ${
            errors.email ? 'border-[#C1A881]' : ''
          }`}
          required
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          className={`p-2 border border-gray-300 rounded text-[#C1A881] ${
            errors.password ? 'border-[#C1A881]' : ''
          }`}
          required
        />
        {errors.password && <span className="text-red-500">{errors.password}</span>}

        <button
          type="submit"
          className="p-2 rounded hover:bg-opacity-80"
          style={{ backgroundColor: '#C1A881', color: 'white' }}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
