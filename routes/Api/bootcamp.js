const express = require('express'),
    router = express.Router(),
    {
        getBootCamp,
        getBootCamps,
        postBootCamps,
        putBootCamps,
        deleteBootCamps
    } = require('../../controllers/Api/bootcamp');

router.route('/').get(getBootCamps);
router.route('/:id').get(getBootCamp).put(putBootCamps).delete(deleteBootCamps).post(postBootCamps);


module.exports = router;