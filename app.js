const express = require('express');
const routes = require('./routes');

require('dotenv').config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log('Listening on port ',  + process.env.PORT);
});

app.get('/', async(req, res) => {
    res.send('Welcome to Gmail API with NodeJS');
});

app.use('/api', routes);