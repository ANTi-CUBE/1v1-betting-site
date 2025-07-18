const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const dbPath = path.join(__dirname, 'db', 'database.json');

app.use(express.json());

// Health check
app.get('/healthz', (req, res) => {
  res.send('OK');
});

// Sample endpoint to get data from JSON
app.get('/api/data', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read database' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
