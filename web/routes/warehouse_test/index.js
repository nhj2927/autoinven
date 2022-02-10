module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {});
  router.get('/enroll', (req, res) => {});
  router.get('/:id', (req, res) => {});
  router.get('/:id/edit', (req, res) => {});
  router.use('/:id/iot', require('./iot')(db));

  return router;
};
