import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registroSucesso, setRegistroSucesso] = useState(false); // Estado para controlar se o registro foi bem-sucedido

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password);
      setRegistroSucesso(true); // Define o estado como verdadeiro após o registro bem-sucedido
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className='text-center'>Registre Seus Dados Aqui</h2>
      <form className='container' onSubmit={handleRegistro}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Insira seu e-mail</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Insira sua senha</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
      {error && <p>{error}</p>}
      {registroSucesso && <p>Usuário registrado com sucesso!</p>} {/* Mostra a mensagem de sucesso se o registro for bem-sucedido */}
    </div>
  );
};

export default Registro;
