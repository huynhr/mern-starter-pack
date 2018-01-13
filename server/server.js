const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// File paths
const routers = require('./routes/routes');

// Initialize Express App
const app = express();

// Set up mongoose connection
mongoose.connect('mongodb://localhost/todo-react', {
  useMongoClient: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console), 'connection error:');
db.once('openUri', () => {
  console.log('connected to MongoDB');
})

// PORT and Static Files
const PORT = process.env.PORT || 1600;
app.use(express.static(path.join(__dirname, '/../client/dst')));

// Routes
app.use('/api', routers);

app.listen(PORT, () => console.log(`Listening to port: ${PORT}`))

module.exports = app;