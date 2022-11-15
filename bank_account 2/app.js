const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create instance of express app
const app = express();
const PORT = 3005;

// middleware to assist with cross-origin requests
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use('/accounts', require('./routes/accounts'));
app.use('/transact', require('./routes/transact'));

const listener = ()=> console.log(`Application listening on port ${PORT}!`);
app.listen(PORT, listener);