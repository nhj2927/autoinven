module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('/utils/asyncWrapper');
  router.get('/', (req, res) => {});
  router.post('/', (req, res) => {});
  router.put('/:warehouse_id', (req, res) => {});

  router.get(
    '/search',
    doAsync(async (req, res) => {
      const { startDate, endDate, type, area } = req.query;
    })
  );

  return router;
};
