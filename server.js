// Variables
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
// Add near the top of the file
const apiRoutes = require('./routes/apiRoutes');
const inputCheck = require("./utils/inputCheck");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add after Express middleware
app.use('/api', apiRoutes);

// Default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
