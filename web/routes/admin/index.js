module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/contract', (req, res) => {
    res.render('admin/adminLeaseManagement', {});
  });

  router.use('/warehouse', require('./warehouse')(db));

  return router;
};
