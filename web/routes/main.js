module.exports = function () {
  var express = require('express');
  var router = express.Router();

  router.get('/test', function (req, res, next) {
    res.render('signup', { session: req.session });
  });

  return router;
};
