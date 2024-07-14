import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const navigate = useNavigate();

  const authenticateUser = () => {
    // Replace with actual authentication logic (e.g., API call)
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      return true;
    } else {
      return false;
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    if (authenticateUser()) {
      navigate('/dashboard'); // Redirect to dashboard upon successful login
    } else {
      setAuthError('Invalid email or password');
    }
  };

  return (
    <div className="mainContainer" style={{ backgroundColor: "#003087", color: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="contentContainer">
        <div className="titleContainer" style={{ textAlign: 'center'}}>
          <div>Login</div>
        </div>
        <form onSubmit={handleLoginSubmit} className="loginFormContainer" style={{ textAlign: 'center' }}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="inputField"
            style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="inputField"
            style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          />
          <br />
          <input
            type="submit"
            className="inputButton"
            value="Log in"
            style={{ fontSize: '1.2em', padding: '10px 20px' }}
          />
          {authError && <div style={{ color: 'red', marginTop: '10px' }}>{authError}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
