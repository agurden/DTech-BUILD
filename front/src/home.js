import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
    navigate('/login');
  };

  const handleCreateAccountButtonClick = () => {
<<<<<<< HEAD
    navigate('/create-user'); // Navigate to Create User Form
=======
    setShowCreateAccountForm(true);
    setShowLoginForm(false);
  };

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  const handleCreateFirstNameChange = (event) => {
    setCreateFirstName(event.target.value);
  };

  const handleCreateLastNameChange = (event) => {
    setCreateLastName(event.target.value);
  };

  const handleCreateEmailChange = (event) => {
    setCreateEmail(event.target.value);
  };

  const handleCreatePasswordChange = (event) => {
    setCreatePassword(event.target.value);
  };

  const handleCreateConfirmPasswordChange = (event) => {
    setCreateConfirmPassword(event.target.value);
  };

  const authenticateUser = (email, password) => {
    // Mock authentication logic
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      return true;
    } else {
      return false;
    }
  };

  const handleLoginSubmit = () => {
    
    // Example authentication logic goes here...
    navigate('/userhome'); // Navigate to user homepage or update loggedIn state on successful login
    
    setEmailError('');
    setPasswordError('');
    setAuthError('');

    if (inputEmail === '') {
      setEmailError('Please enter your email');
      return;
    }

    if (inputPassword === '') {
      setPasswordError('Please enter your password');
      return;
    }

    if (authenticateUser(inputEmail, inputPassword)) {
      navigate('/dashboard'); // Navigate to dashboard or update loggedIn state on successful login
    } else {
      setAuthError('Invalid email or password');
    }
  };

  const handleCreateAccountSubmit = () => {
    // Handle account creation logic here...
    navigate('/account-created');
    
>>>>>>> origin
  };

  return (
    <div className="mainContainer" style={{ backgroundColor: "#003087", color: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="contentContainer">
        {!showLoginForm && (
          <>
            <div className="titleContainer" style={{ textAlign: 'center'}}>
              <div>Welcome!</div>
              <div style={{ fontSize: '0.6em', textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
                Need help finding a fitness buddy?
              </div>
            </div>
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
                style={{ fontSize: '1.5em', padding: '5px 15px', marginTop: '20px', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '5px', marginLeft: '10px' }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
