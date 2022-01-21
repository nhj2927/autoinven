module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('common/warehouse', {});
  });

  router.get('/:warehouse_id', (req, res) => {
    res.render('common/warehouseDetailWithItem', {});
  });

  router.use('/:warehouse_id/iot', require('./iot')(db));

  return router;
};
