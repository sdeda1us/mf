const express = require('express');
require('dotenv').config();

const app = express();

//Include routes
const playersRouter = require('./routes/players.router');
const poolRouter = require('./routes/pool.router');

// Serve static files
app.use(express.static('build'));

//server routes
app.use('/api/players', playersRouter);
app.use('/api/pool', poolRouter);

// App Set //
const PORT = process.env.PORT || 5000;




/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});