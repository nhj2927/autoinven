module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/day', (req, res) => {});
  router.get('/month', (req, res) => {});
  router.get('/year', (req, res) => {});

  return router;
};
