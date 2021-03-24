const express = require('express');
require('dotenv').config();

const app = express();

//Include routes
const playersRouter = require('./routes/players.router');
const poolRouter = require('./routes/pool.router');

// Serve static files
app.use(express.static('build'));
app.use(express.json());

//server route
app.use('/api/players', playersRouter);
app.use('/api/pool', poolRouter);

// App Set //
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});