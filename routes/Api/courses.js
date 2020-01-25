const express = require('express');
const { getCourse, getCourses, addCourse, updateCourses, deleteCourses } = require('../../controllers/Api/courses');

const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses).post(addCourse);
router.route('/:id').get(getCourse).put(updateCourses).delete(deleteCourses);

module.exports = router;