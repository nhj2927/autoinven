module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('common/leaseManagement', {});
  });

  router.get('/:id', (req, res) => {
    res.render('common/contractDetail', {});
  });

  return router;
};
