const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Example routes
app.get('/', (req, res) => {
  res.send('Welcome to the Mock API!');
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created!', user: newUser });
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.json({ message: `User ${userId} updated!`, user: updatedUser });
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ${userId} deleted!` });
});

// Start the server
app.listen(port, () => {
  console.log(`Mock API is running at http://localhost:${port}`);
});
