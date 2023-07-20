import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PasswordEntry from './components/PasswordEntry';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-password" element={<PasswordEntry />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;







