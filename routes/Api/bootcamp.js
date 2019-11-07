const express = require('express'),
    router = express.Router(),
    {
        getBootCamp,
        getBootCamps,
        putBootCamps,
        deleteBootCamps
    } = require('../../controllers/Api/bootcamp');

router.route('/').get(getBootCamps);
router.route('/:id').put(putBootCamps).delete(deleteBootCamps);


module.exports = router;