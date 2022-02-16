module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const authenticate = require('$base/middlewares/authenticate');

  router.use('/auth', require('./auth')(db));
  router.use('/myinfo', authenticate, require('./myinfo')(db));
  router.use('/contract', authenticate, require('./contract')(db));
  router.use('/warehouse', require('./warehouse')(db));
  router.use('/item', authenticate, require('./item')(db));
  router.use('/alert', require('./alert')(db));
  router.use('/iot', require('./iot')(db));

  return router;
};
