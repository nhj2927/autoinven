module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {});
  router.get('/signin', (req, res) => {});
  router.get('/signup', (req, res) => {});
  router.get('/search', (req, res) => {});
  router.get('/myinfo', (req, res) => {});
  router.use('/warehouse', require('./warehouse_test')(db));
  router.use('/contract', require('./contract_test')(db));
  router.use('/admin', require);

  return router;
};
