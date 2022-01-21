module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/monitoring', (req, res) => {
    res.render('iot/monitoring', {});
  });

  router.get('/statistics', (req, res) => {
    res.render('iot/statistics', {});
  });

  return router;
};
