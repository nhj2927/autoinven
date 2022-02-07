module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.use('/auth', require('./auth')(db));
  router.use('/myinfo', require('./myinfo')(db));
  router.use('/contract', require('./contract')(db));
  router.use('/warehouse', require('./warehouse')(db));
  router.use('/item', require('./item')(db));
  router.use('/alert', require('./alert')(db));

  return router;
};
