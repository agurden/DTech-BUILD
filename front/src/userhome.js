import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserHome() {
  const navigate = useNavigate();

  return (
    <>
    <div className='mainContainer' style={{backgroundColor: "#003087"}}>
      <div className="titleContainer" style={{marginTop: '50px', color: "white"}}>
        Welcome Back!
      </div>
      <div className="newButton">
        <button className="specialButton" onClick={() => { navigate("/findbuddy") }} style={{height: "260px", width: "260px", fontSize: "1.7em"}}>
            Find Buddy
        </button>
        <button className="specialButton" onClick={() => { navigate("/CreatePreferences") }}>
            Preferences
        </button>
      </div>
      </div>
    </>
  );
}

export default UserHome;

