// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo!</h1>
      <Link to="/register">Registrar</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/game">Novo jogo</Link>
    </div>
  );
};

export default Home;
