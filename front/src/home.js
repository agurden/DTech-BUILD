import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
    setShowCreateAccountForm(false);
  };

  const handleCreateAccountButtonClick = () => {
    setShowCreateAccountForm(true);
    setShowLoginForm(false);
    navigate('/create-user'); // Navigate to Create User Form
  };

  const authenticateUser = (email, password) => {
    // Replace with actual authentication logic (e.g., API call)
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    return email === validEmail && password === validPassword;
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setAuthError('');

    if (inputEmail === '' || inputPassword === '') {
      setAuthError('Please enter both email and password');
      return;
    }

    if (authenticateUser(inputEmail, inputPassword)) {
      navigate('/dashboard');
    } else {
      setAuthError('Invalid email or password');
    }
  };

  return (
    <div className="mainContainer" style={{ backgroundColor: "#003087", color: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="contentContainer">
        {!showLoginForm && !showCreateAccountForm && (
          <div className="titleContainer" style={{ textAlign: 'center'}}>
            <div>Welcome!</div>
            <div style={{ fontSize: '0.6em', textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
              Need help finding a fitness buddy?
            </div>
          </div>
        )}
        {!showLoginForm && !showCreateAccountForm && (
          <div className="buttonContainer" style={{ textAlign: 'center' }}>
            <input
              className="inputButton"
              type="button"
              onClick={handleLoginButtonClick}
              value="Log in"
              style={{ fontSize: '2.5em', padding: '15px 25px', marginTop: '20px', backgroundColor: '#005BB5', color: 'white', border: 'none', borderRadius: '5px' }}
            />
            <input
              className="inputButton"
              type="button"
              onClick={handleCreateAccountButtonClick}
              value="Create Account"
              style={{ fontSize: '1.5em', padding: '5px 15px', marginTop: '20px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '5px' }}
            />
          </div>
        )}
        {showLoginForm && (
          <div className="loginFormContainer" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.0em', marginBottom: '15px', fontWeight: 'bold' }}>Log In Here</div>
            <div style={{ fontSize: '1.5em', marginBottom: '25px' }}>Enter username and password below.</div>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                className="inputField"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
                placeholder="Enter your email"
                style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
              />
              <br />
              <input
                type="password"
                className="inputField"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Enter your password"
                style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
              />
              <br />
              <input
                className="inputButton"
                style={{ display: 'block', margin: '0 auto', fontSize: '1.2em', padding: '10px 20px' }}
                type="submit"
                value="Submit"
              />
              {authError && <div style={{ color: 'red', marginTop: '10px' }}>{authError}</div>}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
