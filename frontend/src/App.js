import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [health, setHealth] = useState(null);

  useEffect(() => {
    const API_URL = 'http://localhost:3001';
    
    fetch(`${API_URL}/health`)
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(err => console.error(err));

    fetch(`${API_URL}/api/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>DevOps Microservices Project</h1>
        
        <div style={{ margin: '20px', padding: '20px', background: '#282c34', borderRadius: '10px' }}>
          <h2>Backend Health Status</h2>
          {health ? (
            <div>
              <p>Status: {health.status}</p>
              <p>Service: {health.service}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div style={{ margin: '20px', padding: '20px', background: '#282c34', borderRadius: '10px' }}>
          <h2>Team Members</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {users.map(user => (
              <li key={user.id} style={{ margin: '10px 0' }}>
                {user.name} - {user.role}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
