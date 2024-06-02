import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataJson = JSON.stringify(formData);
    console.log(typeof(formDataJson))
    await axios.post('http://localhost:5000/registro', formDataJson, {
      headers: { 'Content-Type': 'application/json' }
    });
    navigate('/game');
    
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Nome de usuário" value={formData.username} onChange={handleChange} required />
        <br/>
        <input type="password" name="password" placeholder="Senha" value={formData.password} onChange={handleChange} required />
        <br/>
        <button type="submit">Registrar</button>
      </form>
      <Link to="/login">Já tem uma conta? Faça login aqui.</Link>
    </div>
  );
};

export default Register;
