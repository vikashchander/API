const express = require('express');
const dotenv = require('dotenv');

//load env vars 
dotenv.config({
    path: './config/config.env'
});

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.status(200).json({
        Name: 'Vikashchander'
    });
})

//routers
app.use('/api/V1/BootCamp', require('./routes/Api/bootcamp'));



app.listen(PORT, console.log(`Server running in  at ${PORT}`));