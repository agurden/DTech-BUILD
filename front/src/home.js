import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate('/login');
  };

  const handleCreateAccountButtonClick = () => {
    navigate('/create-user');
  };

  return (
    <div className="mainContainer" style={{ backgroundColor: "#003087", color: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="contentContainer">
        <div className="titleContainer" style={{ textAlign: 'center' }}>
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
      </div>
    </div>
  );
};

export default Home;
