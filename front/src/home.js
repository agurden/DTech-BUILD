import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ loggedIn, email }) => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCreateAccountForm, setShowCreateAccountForm] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [createFirstName, setCreateFirstName] = useState('');
  const [createLastName, setCreateLastName] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [createConfirmPassword, setCreateConfirmPassword] = useState('');
  const [createGender, setCreateGender] = useState('');
  const [createAge, setCreateAge] = useState(''); // State for age
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [authError, setAuthError] = useState('');

  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
    setShowCreateAccountForm(false);
  };

  const handleCreateAccountButtonClick = () => {
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

  const handleCreateGenderChange = (event) => {
    setCreateGender(event.target.value);
  };

  const handleCreateAgeChange = (event) => {
    const ageValue = event.target.value;
    // Ensure age is a non-negative integer
    if (ageValue === '' || /^\d+$/.test(ageValue)) {
      setCreateAge(ageValue);
    }
  };

  const authenticateUser = (email, password) => {
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    return email === validEmail && password === validPassword;
  };

  const handleLoginSubmit = () => {
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
      navigate('/dashboard');
    } else {
      setAuthError('Invalid email or password');
    }
  };

  const handleCreateAccountSubmit = () => {
    // Handle account creation logic here...
    console.log('Account created:', {
      firstName: createFirstName,
      lastName: createLastName,
      email: createEmail,
      password: createPassword,
      gender: createGender,
      age: createAge,
    });
    navigate('/account-created');
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
            <input
              type="text"
              className="inputField"
              value={inputEmail}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            />
            <br />
            <input
              type="password"
              className="inputField"
              value={inputPassword}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            />
            <br />
            <input
              className="inputButton"
              style={{ display: 'block', margin: '0 auto', fontSize: '1.2em', padding: '10px 20px' }}
              type="button"
              onClick={handleLoginSubmit}
              value="Submit"
            />
            {authError && <div style={{ color: 'red', marginTop: '10px' }}>{authError}</div>}
          </div>
        )}
        {showCreateAccountForm && (
          <div className="createAccountFormContainer" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.0em', marginBottom: '15px', fontWeight: 'bold' }}>Create Account</div>
            <div style={{ fontSize: '1.5em', marginBottom: '25px' }}>Enter your details below.</div>
            <input
              type="text"
              className="inputField"
              value={createFirstName}
              onChange={handleCreateFirstNameChange}
              placeholder="Enter your first name"
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            />
            <br />
            <input
              type="text"
              className="inputField"
              value={createLastName}
              onChange={handleCreateLastNameChange}
              placeholder="Enter your last name"
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            />
            <br />
            <select
              className="inputField"
              value={createGender}
              onChange={handleCreateGenderChange}
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <input
              type="number"
              className="inputField"
              value={createAge}
              onChange={handleCreateAgeChange}
              placeholder="Enter your age"
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            />
            <br />
            <input
              type="text"
              className="inputField"
              value={createEmail}
              onChange={handleCreateEmailChange}
              placeholder="Enter your email"
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            />
            <br />
            <input
              type="password"
              className="inputField"
              value={createPassword}
              onChange={handleCreatePasswordChange}
              placeholder="Enter your password"
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            />
            <br />
            <input
              type="password"
              className="inputField"
              value={createConfirmPassword}
              onChange={handleCreateConfirmPasswordChange}
              placeholder="Confirm your password"
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            />
            <br />
            <input
              className="inputButton"
              style={{ display: 'block', margin: '0 auto', fontSize: '1.2em', padding: '10px 20px' }}
              type="button"
              onClick={handleCreateAccountSubmit}
              value="Create Account"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
