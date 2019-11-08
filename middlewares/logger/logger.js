const logger = (req, res, next) => {
    let date = new Date();
    console.log(`${req.method} ${req.protocol} :// ${req.get('host')} ${req.originalUrl}  ${date.toString()}`);
    next();
}

module.exports = logger;