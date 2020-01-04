const express = require('express'),
    router = express.Router(),
    {
        getBootCamp,
        getBootCamps,
        createBootCamp,
        putBootCamps,
        deleteBootCamps,
        getBootcampsInRadius
    } = require('../../controllers/Api/bootcamp');

router.route('/').get(getBootCamps).post(createBootCamp);
router.route('/:id').get(getBootCamp).put(putBootCamps).delete(deleteBootCamps);
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);


module.exports = router;