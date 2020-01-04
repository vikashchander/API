const ErrorResponse = require('../../utils/errorResponse'),
  asyncHandler = require('../../middlewares/asyncHandler'),
  geocoder = require('../../utils/geocoder');
BootCamp = require('../../models/Bootcamp');

// @desc Get all bootcamp
// @route Get /api/v1/bootcamps/
// @acess public
exports.getBootCamps = asyncHandler(async (req, res, next) => {
  let query;
  let queryStr = JSON.stringify(req.query);
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
  query = BootCamp.find(JSON.parse(queryStr));

  const bootcamps = await query;
  res.status(200).json({
    sucess: true,
    count: bootcamps.length,
    data: bootcamps
  });
  res.status(400).json({
    sucess: false
  })


});

// @desc Get single bootcamp
// @route Get /api/v1/bootcamps/:id
// @acess public
exports.getBootCamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    sucess: true,
    data: bootcamp
  })
  next(error);

});

// @desc post single bootcamp
// @route post /api/v1/bootcamps/:id
// @acess private
exports.createBootCamp = asyncHandler(async (req, res, next) => {
  const Bootcamp = await BootCamp.create(req.body);
  res.status(201).json({
    success: true,
    data: Bootcamp
  });
  next(error);

});

// @desc put single bootcamp
// @route Get /api/v1/bootcamps/:id
// @acess public

exports.putBootCamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!bootcamp) {
    return res.status(400).json({
      success: false,
    });
  }
  res.status(200).json({
    success: true,
    data: bootcamp
  });
  res.status(400).json({
    success: false,
    msg: 'error'
  });
});

// @desc Get single bootcamp
// @route Get /api/v1/bootcamps/:id
// @acess public
exports.deleteBootCamps = asyncHandler(async (req, res, next) => {
  const bootcamp = await BootCamp.findByIdAndDelete(req.params.id, req.body);
  if (!bootcamp) {
    res.status(400).json({
      sucess: false
    })
    res.status(200).json({
      sucess: true,
      msg: `${req.params.id} delete sucessfully`,
      data: bootcamp
    })
  }
  res.status(400).json({
    sucess: false,
    msg: 'error'
  })


});

// @desc      Get bootcamps within a radius
// @route     GET /api/v1/bootcamps/radius/:zipcode/:distance
// @access    Private
exports.getBootcampsInRadius = asyncHandler(async (req, res, next) => {
  const {
    zipcode,
    distance
  } = req.params;

  // Get lat/lng from geocoder
  const loc = await geocoder.geocode(zipcode);
  const lat = loc[0].latitude;
  const lng = loc[0].longitude;

  // Calc radius using radians
  // Divide dist by radius of Earth
  // Earth Radius = 3,963 mi / 6,378 km
  const radius = distance / 3963;

  const bootcamps = await BootCamp.find({
    location: {
      $geoWithin: {
        $centerSphere: [
          [lng, lat], radius
        ]
      }
    }
  });

  res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps
  });
});