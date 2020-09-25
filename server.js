const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// traigo las configuraciones 
dotenv.config({ path: './config/config.env' });
// Inicio express
const app = express();

const transactions =  require('./routes/transactions');

app.use('/api/vi/transactions', transactions)

// puerto de inciliación
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))


