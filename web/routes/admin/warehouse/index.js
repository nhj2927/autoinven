const { doAsync } = require('$base/utils/asyncWrapper');

module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const getWarehouses = require('./getWarehouses');

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

  router.get('/:warehouse_id/edit', (req, res) => {
    res.render('admin/editWarehouse', {});
  });

  return router;
};
