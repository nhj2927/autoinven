module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/enroll', (req, res) => {
    res.render('admin/enrollWarehouse', {});
  });

  router.get('/:warehouse_id/edit', (req, res) => {
    res.render('admin/editWarehouse', {});
  });

  return router;
};
