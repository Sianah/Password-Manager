import React, { useState } from 'react';
import './App.css';

function App() {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const loadFromLocalStorage = () => {
    const savedEntries = localStorage.getItem('entries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  };

  const initialEntries = loadFromLocalStorage();
  const [entries, setEntries] = useState(initialEntries);

  const saveToLocalStorage = (newEntries) => {
    localStorage.setItem('entries', JSON.stringify(newEntries));
  };

  const addEntry = () => {
    if (website && username && password) { // Ensure fields aren't empty
      const newEntry = `${website} | ${username} | ${password}`;
      const updatedEntries = [...entries, newEntry];
      setEntries(updatedEntries);
      saveToLocalStorage(updatedEntries);

      // Clear the input fields
      setWebsite("");
      setUsername("");
      setPassword("");
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedEntries = entries.filter((_, index) => index !== indexToDelete);
    setEntries(updatedEntries);
    saveToLocalStorage(updatedEntries);
  };

  return (
    <div className="App">
      <h2>Password Manager</h2>
  
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website"
          style={{ border: '2px solid #ddd', padding: '5px', borderRadius: '15px' }}
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          style={{ border: '2px solid #ddd', padding: '5px', borderRadius: '15px' }}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          style={{ border: '2px solid #ddd', padding: '5px', borderRadius: '15px' }}
        />
        <button onClick={addEntry} style={{ borderRadius: '15px' }}>
          Add
        </button>
      </div>
  
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            {entry} 
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default App;









