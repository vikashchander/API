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
exports.postBootCamps = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    msg: `this is a post route ${req.params.id}`
  });
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
    msg: `this is a post route ${req.params.id}`
  });
};
