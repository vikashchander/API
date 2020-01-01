const ErrorResponse = require('../utils/errorResponse');
const errorHandler = (err, req, res, next) => {
    let error = {
        ...err
    };
    error.message = err.message;
    // console.error(err.stack.red);
    //find error
    //  console.log(err);
    // mongoDB objectId failed 

    if (err.name === 'CastError') {
        const message = `bootcamp not found ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    //Mongo Error 
    if (err.code === 11000) {
        const message = `data already in database ${err.errmsg}`;
        error = new ErrorResponse(message, 400);
    }
    //Validator Error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }
    res.status(error.statusCode).json({
        sucess: false,
        error: error.message,
        data: 'invalid request'
    })
}

module.exports = errorHandler;