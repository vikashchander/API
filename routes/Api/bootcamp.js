const express = require('express'),
    router = express.Router(),
    {
        getBootCamp,
        getBootCamps,
        createBootCamp,
        putBootCamps,
        deleteBootCamps
    } = require('../../controllers/Api/bootcamp');

router.route('/').get(getBootCamps).post(createBootCamp);
router.route('/:id').get(getBootCamp).put(putBootCamps).delete(deleteBootCamps);


module.exports = router;