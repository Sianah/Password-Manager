import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Get initial data from local storage or default to an empty array
  const initialEntries = JSON.parse(localStorage.getItem('passwords')) || [];

  const [entries, setEntries] = useState(initialEntries);
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Effect to save to local storage whenever entries change
  useEffect(() => {
    localStorage.setItem('passwords', JSON.stringify(entries));
  }, [entries]);

  const addEntry = () => {
    const newEntry = { website, username, password };
    setEntries([...entries, newEntry]);
    setWebsite("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="App">
      <h1>Password Manager</h1>
      <div>
        <input 
          placeholder="Website" 
          value={website}
          onChange={e => setWebsite(e.target.value)}
        />
        <input 
          placeholder="Username" 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input 
          placeholder="Password" 
          type="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={addEntry}>Add Entry</button>
      </div>
      <div>
        <h2>Stored Entries</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index}>
              Website: {entry.website} | Username: {entry.username} | Password: {entry.password}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;






