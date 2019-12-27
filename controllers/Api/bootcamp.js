const BootCamp = require('../../models/Bootcamp')
// @desc Get all bootcamp
// @route Get /api/v1/bootcamps/
// @acess public
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamps = await BootCamp.find();
    res.status(200).json({
      sucess: true,
      count: bootcamps.length,
      data: bootcamps
    });
  } catch (error) {
    res.status(400).json({
      sucess: false
    })
  }

};

// @desc Get single bootcamp
// @route Get /api/v1/bootcamps/:id
// @acess public
exports.getBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await BootCamp.findOne();
    res.status(200).json({
      sucess: true,
      data: bootcamp
    })
  } catch (error) {
    res.status(400).json({
      sucess: false
    });
  }
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

exports.putBootCamps = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      success: false,
      msg: 'error'
    });
  }
}

// @desc Get single bootcamp
// @route Get /api/v1/bootcamps/:id
// @acess public
exports.deleteBootCamps = async (req, res, next) => {
  try {
    const bootcamp = await BootCamp.findByIdAndDelete(req.params.id, req.body);
    if (!bootcamp) {
      res.status(400).json({
        sucess: false
      })
    }
    res.status(200).json({
      sucess: true,
      msg: `${req.params.id} delete sucessfully`,
      data: bootcamp
    })
  } catch (error) {
    res.status(400).json({
      sucess: false,
      msg: 'error'
    })
  }

};