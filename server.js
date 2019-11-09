const express = require('express'),
    dotenv = require('dotenv'),
    morgan = require('morgan');

//load env vars
dotenv.config({
    path: './config/config.env'
});

const app = express();

//use morgan 
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).json({
        Name: 'Vikashchander'
    });
});

// //custom logger
// const logger = require('./middlewares/logger/logger');
// //use custom logger
// app.use(logger);

const Port = 8000;

//routers
app.use('/api/V1/BootCamp', require('./routes/Api/bootcamp'));

app.listen(Port, console.log(`Server running in  at ${Port}`));