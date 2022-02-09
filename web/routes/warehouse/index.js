module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getUserWarehouses = require('./getUserWarehouses');
  const getWarehouseDetailWithItem = require('./getWarehouseDetailWithItem');

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

  router.get(
    '/:id',
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        params: { id: warehouse_id },
      } = req;

      const warehouse = await getWarehouseDetailWithItem(
        db,
        locale,
        warehouse_id
      );

      res.render('common/warehouseDetailWithItem', { ...warehouse });
    })
  );

  router.use('/:warehouse_id/iot', require('./iot')(db));

  return router;
};
