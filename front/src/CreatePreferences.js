import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePreferences = () => {
  const navigate = useNavigate();
  const [createTime, setWorkoutTime] = useState('');
  const [createLength, setWorkoutLength] = useState('');

  const [timeError, setTimeError] = useState('');
  const [lengthError, setLengthError] = useState('');
  
  const [authError, setAuthError] = useState('');
  const [IsChecked, setIsChecked] = useState('');

  const createPref = async () => {
    const prefData = {
      time : createTime,
      length : parseInt(createLength)
    };

    try {
      const response = await fetch('http://localhost:8080/api/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(prefData)
      });

      if (!response.ok) {
        throw new Error('Failed to create preferences');
      }

      const responseData = await response.json();
      console.log('User created:', responseData);
      navigate('/account-created'); // Redirect after successful creation
    } catch (error) {
      console.error('Error creating user:', error.message);
      setAuthError('Failed to create preferences. Please try again.');
    }
  };

  const handleCreatePrefSubmit = (event) => {
    event.preventDefault();

    setTimeError('');
    setLengthError('');
    setAuthError('');

    if (createLength === '') {
      setLengthError('Please enter a response');
      return;
    }

    if (createTime === '') {
      setTimeError('Please select response');
      return;
    }

    createPref();
  };

  const handleCreateTimeClick = (event) => {
    setIsChecked(event.target.checked);
    setCreateLength(event.target.value)
  };

  return (
    <div className="createPrefContainer" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2.0em', marginBottom: '15px', fontWeight: 'bold' }}>Add Preferences</div>
      <form onSubmit={handleCreatePrefSubmit}>
        <div style={{ fontSize: '1.5em', marginBottom: '25px' }}>Enter your typical workout preferences!</div>
        <input
          type="text"
          className="inputField"
          value={createLength}
          onChange={(e) => setCreateLength(e.target.value)}
          placeholder="Enter Length of Workout"
          style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          required
        />
        <br />
        <input
          type="radio"
          id = "createtime"
          className="inputField"
          value={createTime}
          checked = {IsChecked}
          onChange={handleCreateTimeClick}
          placeholder="Enter Time of Workout"
          style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
          required
        />
        <br />
        <br>
        <label for="createtime">Morning</label>
        </br>
        {timeError && <div style={{ color: 'red', marginTop: '5px' }}>{timeError}</div>}

        <button
          className="inputButton"
          style={{ display: 'block', margin: '0 auto', fontSize: '1.2em', padding: '10px 20px' }}
          type="submit"
        >
          Finish Preferences
        </button>
        {authError && <div style={{ color: 'red', marginTop: '10px' }}>{authError}</div>}
      </form>
    </div>
  );
};

export default CreatePreferences;