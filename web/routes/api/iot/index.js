module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.use('/stat', require('./stat')(db));

  router.use('/device', require('./stat')(db));

  return router;
};
