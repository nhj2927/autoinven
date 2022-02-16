module.exports = (db) => {
  const express = require('express');
  const router = express.Router();
  const authenticate = require('$base/middlewares/authenticate');

  router.use('/stat', authenticate, require('./stat')(db));

  router.use('/device', require('./device')(db));

  return router;
};
