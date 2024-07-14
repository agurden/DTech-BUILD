import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './home';
import Login from './login';
import CreateUserForm from './CreateUserForm'; // Import CreateUserForm component
import './App.css';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/create-user" element={<CreateUserForm />} /> {/* Route for CreateUserForm */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
