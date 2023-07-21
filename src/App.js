import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State declarations
  const [website, setWebsite] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [entries, setEntries] = useState([]);

  // Check local storage on component mount and update the state if needed
  useEffect(() => {
    const storedEntries = localStorage.getItem('passwordEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  }, []);

  const addEntry = () => {
    if (website && username && password) {
      const newEntry = { website, username, password };
      const newEntries = [...entries, newEntry];
      setEntries(newEntries);

      // Update local storage
      localStorage.setItem('passwordEntries', JSON.stringify(newEntries));

      // Clear the form fields
      setWebsite('');
      setUsername('');
      setPassword('');
    }
  };

  const handleDelete = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);

    // Update local storage
    localStorage.setItem('passwordEntries', JSON.stringify(updatedEntries));
  };

  return (
    <div className="App">
      <h2>Code Keeper</h2>
      <h2>Leave those password guessing games behind</h2>
      <div style={{ display: 'inline-flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={addEntry}>Add Entry</button>
      </div>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <strong>Website:</strong> {entry.website} | 
            <strong>Username:</strong> {entry.username} | 
            <strong>Password:</strong> {entry.password} 
            <button onClick={() => handleDelete(index)} style={{backgroundColor: 'red', color: 'white', marginLeft: '10px'}}>Delete</button>


          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;













