const ErrorResponse = require('../../utils/errorResponse');
const asyncHandler = require('../../middlewares/asyncHandler');
const Course = require('../../models/Course');

// @desc      Get single course
// @route     GET /api/v1/courses/:id
// @access    Public
exports.getCourses = asyncHandler(async (req, res, next) => {
    const courses = await Course.findById().populate({
        path: 'bootcamp',
        select: 'name description'
    });

    if (!course) {
        return next(
            new ErrorResponse(`No course with the id of ${req.params.id}`),
            404
        );
    }

    res.status(200).json({
        success: true,
        count: courses.length,
        data: courses
    });
});


// @desc      Get courses
// @route     GET /api/v1/courses
// @route     GET /api/v1/bootcamps/:bootcampId/courses
// @access    Public
exports.getCourses = asyncHandler(async (req, res, next) => {
    let query;

    if (req.params.bootcampId) {
        query = Course.find({ bootcamp: req.params.bootcampId });
    } else {
        query = Course.find().populate({
            path: 'bootcamp',
            select: 'name description'
        });
    }

    const courses = await query;

    res.status(200).json({
        success: true,
        count: courses.length,
        data: courses
    });
});

// @desc      update courses
// @route     POST /api/v1/bootcamps/:bootcampId/course/:courseId
// @access    private 
exports.updateCourses = asyncHandler(async (req, res, next) => {
    let course = await Course.findById(req.params.id);


    if (!course) {
        return next(
            new ErrorResponse(`No bootcamp with the id of ${req.params.id}`),
            404
        );
    }
    courses = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidator: true
    });

    res.status(200).json({
        success: true,
        count: courses.length,
        data: courses
    });
});
// @desc      delete courses
// @route     POST /api/v1/bootcamps/:bootcampId/courses/:courseId
// @access    private 
exports.deleteCourses = asyncHandler(async (req, res, next) => {
    const courses = await Course.findByIdAndDelete()
    if (!course) {
        return next(
            new ErrorResponse(`No bootcamp with the id of ${req.params.id}`),
            404
        );
    }

    await courses.remove();

    res.status(200).json({
        success: true,
        data: {}
    });
});