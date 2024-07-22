import React, {useState, useEffect} from 'react';

function PreferenceList() {
    const [preferences, setPreference] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/api')
        .then(response => response.json())
        .then(data => setPreference(data))
        .catch(error => console.error('Error fetching users:', error));
    }, []);
  
    return (
      <div>
        <h2>Preferences</h2>
        <ul>
          {preferences.map(preferences => (
            <li key={preferences.id}>{preferences.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PreferenceList;