// Variables
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql2");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to the database (mysql)
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Bashi1996",
    database: "election",
  },
  console.log("Connected to the database `election`")
);

// Default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
