<<<<<<< HEAD
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import Login from './login';
import CreateUserForm from './CreateUserForm'; // Import CreateUserForm component
import './App.css';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './login'
import UserHome from './userhome'
import FindBuddy from './findbuddy'
import './App.css'
import { useEffect, useState } from 'react'
import PreferenceList from './preferences'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [preference, setPreferece] = useState([])
>>>>>>> origin

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
<<<<<<< HEAD
          <Route path="/create-user" element={<CreateUserForm />} /> {/* Route for CreateUserForm */}
=======
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/findbuddy" element={<FindBuddy />} />
          <Route path="/preferences" component={<PreferenceList />} />
>>>>>>> origin
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
