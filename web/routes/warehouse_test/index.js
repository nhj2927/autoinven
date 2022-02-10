module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getCategories = require('./function/getCategories');
  const getWarehouseDetailForEdit = require('./function/getWarehouseDetailForEdit');
  const authorizeContractor = require('./function/authorizeContractor');
  const getWarehouseDetailWithItem = require('./function/getWarehouseDetailWithItem');

  // 창고 목록
  router.get(
    '/',
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        session: { email },
      } = req;

      const warehouses = await getWarehouses(db, locale, email);

      res.render('warehouse/warehouseList', { warehouses });
    })
  );

  // 창고 등록
  router.get(
    '/enroll',
    doAsync(async (req, res) => {
      const categories = await getCategories(db);

      res.render('warehouse/enrollWarehouse', {
        categories,
      });
    })
  );

  // 창고 상세
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
      let warehouse = null;

      // 유저일 경우 창고와 계약되어있는지 호가인
      if (role === 'user') {
        l_contract_id = await authorizeContractor(db, email, warehouse_id);
        warehouse = await getWarehouseDetailWithItem(
          db,
          locale,
          warehouse_id,
          email
        );
      }
      // 관리자일 경우
      else if (role === 'admin') {
        warehouse = await getWarehouseDetailWithItem(db, locale, warehouse_id);
      }

      res.render('warehouse/warehouseDetail', {
        warehouse,
        user: {
          is_contracted: l_contract_id ? true : false,
          email,
          l_contract_id,
        },
      });
    })
  );

  // 창고 수정
  router.get(
    '/:id/edit',
    doAsync(async (req, res) => {
      const {
        params: { id: warehouse_id },
      } = req;

      const warehouse = await getWarehouseDetailForEdit(db, warehouse_id);
      const categories = await getCategories(db);

      res.render('warehouse/editWarehouse', { warehouse, categories });
    })
  );

  // Iot
  router.use('/:id/iot', require('./iot')(db));

  return router;
};
