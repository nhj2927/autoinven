module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/warehouse/:id', (req, res) => {
    res.render('user/warehouseDetail', {});
  });

  router.get('/contract/request', (req, res) => {
    res.render('user/contractRequestDetail', {});
  });

  return router;
};
