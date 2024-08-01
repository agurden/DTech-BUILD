import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './login'
import UserHome from './userhome'
import FindBuddy from './findbuddy'
import './App.css'
import { useEffect, useState } from 'react'
import CreatePreferences from './CreatePreferences'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [preferences, setPreferences] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/findbuddy" element={<FindBuddy />} />
          <Route path="/CreatePreferences" element={<CreatePreferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App