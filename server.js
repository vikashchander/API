const express = require('express'),
  dotenv = require('dotenv'),
  morgan = require('morgan'),
  colors = require('colors');
const connectDB = require('./config/db');

//load env vars
dotenv.config({
  path: './config/config.env'
});

const app = express();
//body parser
app.use(express.json());

// connect db
connectDB();
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

const server = app.listen(
  Port,
  console.log(`Server running in  at ${Port}`.underline.red)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.rainbow);
  // Close server & exit process
  server.close(() => process.exit(1));
});