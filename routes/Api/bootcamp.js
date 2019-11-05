const express = require('express'),
    router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({
        id: 1105,
        name: 'brad travery'
    })
})

module.exports = router;