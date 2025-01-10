const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Add this line
const path = require('path');
require('dotenv').config(); // Add this at the top of your file
const mongoose = require('mongoose');

const app = express();

// CORS Middleware - Add this before other middleware
app.use(cors({
    origin: 'http://localhost:5173', // Your React app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
// Serve static files from the "frontend/build" folder
app.use(express.static(path.resolve(__dirname, 'frontend', 'dist')));

// Handle all other routes by serving the frontend's index.html
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
});


// Routes
app.use('/api', require('./routes/news'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



