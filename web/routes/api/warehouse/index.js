module.exports = (db) => {
  const express = require('express');
  const router = express.Router();
  const { doAsync } = require('$base/utils/asyncWrapper');
  const warehouse = require('./warehouseAPIs');

  router.get(
    '/',
    doAsync(async (req, res, next) => {
      console.log('IN');
      const warehoues = await warehouse.getAllWarehouses(db);
      res.send(warehoues);
    })
  );
  router.post(
    '/',
    doAsync(async (req, res, next) => {
      const newWarehouse = await warehouse.registerWarehouse(req, db);
      res.status(200).send(newWarehouse);
    })
  );
  router.put(
    '/:warehouse_id',
    doAsync(async (req, res, next) => {
      const result = await warehouse.editWarehouse(req, db);
      res.send({ message: `${result} row(s) affected` });
    })
  );

  router.get(
    '/search',
    doAsync(async (req, res, next) => {
      const result = await warehouse.searchWarehouse(req, db);
      res.send(result);
    })
  );

  return router;
};
