import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import './Login.css';
import { auth } from '../firebase/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password).catch((error) => {
      setErrorLogin('Login ou senha incorretos. Por favor, tente novamente.');
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div>
      <h2 className='text-center'>Insira o seu Login Aqui para Acessar o Sistema</h2>
      <form onSubmit={handleSignIn} className='form-container'>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            className=""
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            className=""
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Entrar</button>
        {errorLogin && <p className="error-message">{errorLogin}</p>}
      </form>
    </div>
  );
};

export default Login;
