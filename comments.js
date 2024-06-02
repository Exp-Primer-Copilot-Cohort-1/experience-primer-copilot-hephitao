// Create web server
// 1. Create a web server
// 2. Create a route
// 3. Create a function to handle the route
// 4. Send a response to the client
// 5. Start the server

// Import express
const express = require('express');

// Initialize express
const app = express();

// Create a route
app.get('/comment', (req, res) => {
  res.send('Hello world!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});