const express = require('express');
const path = require('path');

// File paths
const routers = require('./routes/routes');

// Initialize Express App
const app = express();

// PORT and Static Files
const PORT = process.env.PORT || 1600;
app.use(express.static(path.join(__dirname, '/../client/dst')));

// Routes
app.use('/api', routers);

app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))

module.exports = app;