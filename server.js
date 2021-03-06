const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({ path : './config/config.env'}) //available Global var

connectDB() //connection to mongoose DB

const transactions = require('./routes/transactions')

const app = express();

app.use(express.json()); //allow to use body parser // parse request body

if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev')) //console requests
}

app.use('/api/v1/transactions' , transactions) //api //route=>transactions

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold))