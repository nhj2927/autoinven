module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getWarehouses = require('./getWarehouses');
  const getWarehouseDetailForEdit = require('./getWarehouseDetailForEdit');
  const getCategories = require('./getCategories');

  router.get(
    '/',
    doAsync(async (req, res) => {
      const locale = res.locale;

      const warehouses = await getWarehouses(db, locale);

      res.render('admin/adminWarehouse', { warehouses });
    })
  );

  router.get('/enroll', (req, res) => {
    const user = {
      type: 'admin',
    };
    res.render('admin/enrollWarehouse', {
      user: user,
    });
  });

  router.get(
    '/:id/edit',
    doAsync(async (req, res) => {
      const {
        params: { id: warehouse_id },
      } = req;

      const warehouse = await getWarehouseDetailForEdit(db, warehouse_id);
      const categories = await getCategories(db);

      res.render('admin/editWarehouse', { warehouse, categories });
    })
  );

  return router;
};
