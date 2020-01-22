const express = require('express'),
    router = express.Router({ mergerParams: true }),
    {
        getBootCamp,
        getBootCamps,
        createBootCamp,
        putBootCamps,
        deleteBootCamps,
        getBootcampsInRadius
    } = require('../../controllers/Api/bootcamp');

const courseRouter = require('./courses');



router.route('/').get(getBootCamps).post(createBootCamp);
router.route('/:id').get(getBootCamp).put(putBootCamps).delete(deleteBootCamps);
router.use('/:bootCampsId/courses', courseRouter);
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);


module.exports = router;