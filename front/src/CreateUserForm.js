import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUserForm = () => {
  const navigate = useNavigate();
  const [createFirstName, setCreateFirstName] = useState('');
  const [createLastName, setCreateLastName] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [createConfirmPassword, setCreateConfirmPassword] = useState('');
  const [createGender, setCreateGender] = useState('');
  const [createAge, setCreateAge] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [authError, setAuthError] = useState('');

  const createUser = async () => {
    const userData = {
      firstName: createFirstName,
      lastName: createLastName,
      email: createEmail,
      password: createPassword,
      age: parseInt(createAge),
      gender: createGender
    };

    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const responseData = await response.json();
      console.log('User created:', responseData);
      navigate('/account-created'); // Redirect after successful creation
    } catch (error) {
      console.error('Error creating user:', error.message);
      setAuthError('Failed to create user. Please try again.');
    }
  };

  const handleCreateAccountSubmit = (event) => {
    event.preventDefault();

    setEmailError('');
    setPasswordError('');
    setAgeError('');
    setAuthError('');

    if (createEmail === '') {
      setEmailError('Please enter your email');
      return;
    }

    if (createPassword === '') {
      setPasswordError('Please enter your password');
      return;
    }

    if (createAge === '' || isNaN(parseInt(createAge)) || parseInt(createAge) < 0) {
      setAgeError('Please enter a valid age');
      return;
    }

    createUser();
  };

  return (
    <div className="createUserFormContainer" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2.0em', marginBottom: '15px', fontWeight: 'bold' }}>Create Account</div>
      <form onSubmit={handleCreateAccountSubmit}>
        <div style={{ fontSize: '1.5em', marginBottom: '25px' }}>Enter your details below.</div>
        <input
          type="text"
          className="inputField"
          value={createFirstName}
          onChange={(e) => setCreateFirstName(e.target.value)}
          placeholder="Enter your first name"
          style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          required
        />
        <br />
        <input
          type="text"
          className="inputField"
          value={createLastName}
          onChange={(e) => setCreateLastName(e.target.value)}
          placeholder="Enter your last name"
          style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          required
        />
        <br />
        <input
          type="text"
          className="inputField"
          value={createEmail}
          onChange={(e) => setCreateEmail(e.target.value)}
          placeholder="Enter your email"
          style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          required
        />
        {emailError && <div style={{ color: 'red', marginTop: '5px' }}>{emailError}</div>}
        <br />
        <input
          type="password"
          className="inputField"
          value={createPassword}
          onChange={(e) => setCreatePassword(e.target.value)}
          placeholder="Enter your password"
          style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          required
        />
        <br />
        <input
          type="password"
          className="inputField"
          value={createConfirmPassword}
          onChange={(e) => setCreateConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          required
        />
        <br />
        <input
          type="number"
          className="inputField"
          value={createAge}
          onChange={(e) => setCreateAge(e.target.value)}
          placeholder="Enter your age"
          style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          required
        />
        {ageError && <div style={{ color: 'red', marginTop: '5px' }}>{ageError}</div>}
        <br />
        <select
          className="inputField"
          value={createGender}
          onChange={(e) => setCreateGender(e.target.value)}
          style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          required
        >
          <option value="">Select your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <button
          className="inputButton"
          style={{ display: 'block', margin: '0 auto', fontSize: '1.2em', padding: '10px 20px' }}
          type="submit"
        >
          Create Account
        </button>
        {authError && <div style={{ color: 'red', marginTop: '10px' }}>{authError}</div>}
      </form>
    </div>
  );
};

export default CreateUserForm;
