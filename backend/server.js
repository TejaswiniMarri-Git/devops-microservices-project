const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date(),
    service: 'backend-api' 
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', role: 'DevOps Engineer' },
    { id: 2, name: 'Jane Smith', role: 'Cloud Architect' },
    { id: 3, name: 'Mike Johnson', role: 'SRE' }
  ]);
});

// New endpoint - add before app.listen()
app.get('/api/status', (req, res) => {
  res.json({ 
    message: 'CI/CD Pipeline Working!',
    version: '2.0',
    deployed: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
