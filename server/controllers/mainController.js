const models = require('../models/peptydeModels');

const mainController = {};

const { Sample } = models;

//middleware to get all locations
mainController.getSample = (req, res, next) => {
  Sample.find({}, (err, sample) => {
    if (err)
      return next({
        log: `Express error handler caught getSample error ${err}`,
        status: 400,
        message: { err: `${err}` }
      });
    else {
      res.locals.sample = sample;
      return next();
    }
  });
};

module.exports = mainController;
