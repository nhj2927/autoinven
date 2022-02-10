module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {});
  router.get('/:id', (req, res) => {});
  router.get('/request', (req, res) => {});

  return router;
};
