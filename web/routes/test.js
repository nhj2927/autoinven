module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {});
  router.get('/signin', (req, res) => {});
  router.get('/signup', (req, res) => {});
  router.get(
    '/search',
    doAsync(async (req, res) => {
      const warehouses = await db.Warehouse.findAll({
        include: [
          {
            model: db.Address,
            attributes: ['latitude', 'longitude', 'zip_code'],
          },
          {
            model: db.WarehouseImage,
          },
        ],
      });
      console.log(warehouses[0]);
      res.render('common/search', { warehouses: warehouses, user });
    })
  );
  router.get('/myinfo', (req, res) => {});
  router.get('/admin', (req, res) => {});
  router.use('/warehouse', require('./warehouse_test')(db));
  router.use('/contract', require('./contract_test')(db));

  return router;
};
