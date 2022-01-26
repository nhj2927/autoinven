module.exports = (db) => {
  const express = require('express');
  const router = express.Router();
  const itemAPIs = require('./itemAPIs');
  const { doAsync } = require('$base/utils/asyncWrapper');
  // To-Do
  // 1. 모바일 관련 API 추가해야함
  router.get(
    '/',
    doAsync(async (req, res) => {
      const items = await itemAPIs.getAllItems(db);
      res.send(items);
    })
  );

  router.get(
    '/:item_id',
    doAsync(async (req, res) => {
      const item = await itemAPIs.getItem(req, db);
      res.send(item);
    })
  );

  router.post(
    '/',
    doAsync(async (req, res) => {
      const item = await itemAPIs.registerItem(req, db);
      res.send(item);
    })
  );
  router.put(
    '/:item_id',
    doAsync(async (req, res) => {
      const result = await itemAPIs.editItem(req, db);
      res.send({ message: `${result} row(s) affected` });
    })
  );

  return router;
};
