const BootCamp = require('../../models/Bootcamp')
// @desc Get all bootcamp
// @route Get /api/v1/bootcamps/
// @acess public
exports.getBootCamps = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    msg: 'show all bootcamps'
  });
};

// @desc Get single bootcamp
// @route Get /api/v1/bootcamps/:id
// @acess public
exports.getBootCamp = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    msg: 'show single bootcamp'
  });
};

// @desc post single bootcamp
// @route post /api/v1/bootcamps/:id
// @acess private
exports.createBootCamp = async (req, res, next) => {
  try {
    const Bootcamp = await BootCamp.create(req.body);

    res.status(201).json({
      success: true,
      data: Bootcamp
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: `error ${err}`
    });
  }
};

// @desc put single bootcamp
// @route Get /api/v1/bootcamps/:id
// @acess public
exports.putBootCamps = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    msg: `this is a put route ${req.params.id}`
  });
};

// @desc Get single bootcamp
// @route Get /api/v1/bootcamps/:id
// @acess public
exports.deleteBootCamps = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    msg: `this is a delete route ${req.params.id}`
  });
};