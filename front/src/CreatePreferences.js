import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePreferences() {
  const [preferences, setPreferences] = useState({
    uid: "",
    length: "",
    time: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPreferences((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const preference = {
      uid: parseInt(preferences.uid, 10),
      length: parseInt(preferences.length, 10),
      time: preferences.time.toUpperCase()
    };

    navigate("/userhome")
  
    try {
      const response = await fetch('https://localhost:3000/api/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preference),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      navigate("/userhome");
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  

  return (
    <div className="mainContainer" style={{backgroundColor: "#003087", color: 'white', alignItems: 'center'}}>
      <div className="titleContainer" style={{marginBottom: '50px', marginTop: '50px'}}>
        Edit Preferences
        <div style={{ fontSize: '0.3em', textAlign: 'center', marginTop: '20px', fontWeight: 'bold' }}>
              Enter your workout preferences below.
            </div>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="uid">Enter your email ID:</label>
          <input
            type="text"
            id="uid"
            name="uid"
            className="inputBox"
            value={preferences.uid}
            onChange={handleChange}
            style={{ marginBottom: '40px'}}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="length">Enter the length of your workout (in mins):</label>
          <input
            type="text"
            id="length"
            name="length"
            className="inputBox"
            value={preferences.length}
            onChange={handleChange}
            style={{ marginBottom: '40px'}}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="time">Enter the time of your workout (morning, afternoon, evening):</label>
          <input
            type="text"
            id="time"
            name="time"
            className="inputBox"
            value={preferences.time}
            onChange={handleChange}
          />
        </div>

        <div className="buttonContainer">
          <input
            className="inputButton"
            type="button"
            value="Save"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default CreatePreferences;
