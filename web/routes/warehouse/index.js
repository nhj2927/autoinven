module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getUserWarehouses = require('./getUserWarehouses');

  router.get(
    '/',
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        session: { email },
      } = req;

      const warehouses = await getUserWarehouses(db, email, locale);

      res.render('common/warehouse', { warehouses });
    })
  );

  router.get('/:warehouse_id', (req, res) => {
    res.render('common/warehouseDetailWithItem', {});
  });

  router.use('/:warehouse_id/iot', require('./iot')(db));

  return router;
};
