module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getUserWarehouses = require('./getUserWarehouses');
  const getWarehouseDetailWithItem = require('./getWarehouseDetailWithItem');
  const authorizeContractor = require('./authorizeContractor');

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
        session: { role, email },
      } = req;
      const {
        params: { id: warehouse_id },
      } = req;
      let l_contract_id = null;

      // 유저일 경우 권한 확인
      if (role === 'user') {
        l_contract_id = await authorizeContractor(db, email, warehouse_id);
      }

      const warehouse = await getWarehouseDetailWithItem(
        db,
        locale,
        warehouse_id
      );

      res.render('common/warehouseDetailWithItem', {
        warehouse,
        user: {
          email,
          l_contract_id,
        },
      });
    })
  );

  router.use('/:warehouse_id/iot', require('./iot')(db));

  return router;
};
