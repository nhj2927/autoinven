module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/monitoring', (req, res) => {});
  router.get('/statistics', (req, res) => {});

  return router;
};
