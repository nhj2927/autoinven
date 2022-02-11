module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getCategories = require('./function/getCategories');

  const getWarehouseDetailForEdit = require('./function/getWarehouseDetailForEdit');
  const getWarehouseDetail = require('./function/getWarehouseDetail');
  const getWarehouseDetailWithItem = require('./function/getWarehouseDetailWithItem');
  const getWarehouses = require('./function/getWarehouses');

  const authorizeContractor = require('./function/authorizeContractor');
  const authenticate = require('$base/middlewares/authenticate');
  const { authorizeAdmin } = require('$base/middlewares/authorize');

  // 창고 목록
  router.get(
    '/',
    authenticate,
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        session: { role, email },
      } = req;
      let warehouses = [];

      // 유저일 경우
      if (role === 'user') {
        warehouses = await getWarehouses(db, locale, email);
      }
      // 관리자일 경우
      else if (role === 'admin') {
        warehouses = await getWarehouses(db, locale);
      }

      res.render('warehouse/warehouseList', { warehouses });
    })
  );

  // 창고 등록
  router.get(
    '/enroll',
    authenticate,
    authorizeAdmin,
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

      // 관리자일 경우
      if (role === 'admin') {
        warehouse = await getWarehouseDetailWithItem(db, locale, warehouse_id);
      }

      // 유저일 경우 창고와 계약되어있는지 호가인
      else if (role === 'user') {
        l_contract_id = await authorizeContractor(db, email, warehouse_id);
        warehouse = await getWarehouseDetailWithItem(
          db,
          locale,
          warehouse_id,
          email
        );
      }

      // 로그인 안돼있는 경우
      else {
        warehouse = await getWarehouseDetail(db, locale, warehouse_id);
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
    authenticate,
    authorizeAdmin,
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
  router.use('/:id/iot', authenticate, require('./iot')(db));

  return router;
};
