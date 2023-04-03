import React, { useContext, useState } from 'react';
import axios from 'axios';


function SignIn({ history }) {
  const { setIsAuth } = useContext(contextProvider);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/signin', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      setIsAuth(true);
      history.push('/protected');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;