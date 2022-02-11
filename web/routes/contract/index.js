module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');

  const getWarehouseDetail = require('../warehouse/function/getWarehouseDetail');
  const getMyContracts = require('./function/getMyContracts');
  const getContracts = require('./function/getContracts');
  const getContractDetail = require('./function/getContractDetail');
  const checkEstimateParameter = require('./function/checkEstimateParameter');

  const { authorizeUser } = require('$base/middlewares/authorize');

  // 계약 목록
  router.get(
    '/',
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        session: { role, email },
      } = req;
      let contracts = null;

      // 유저일 경우
      if (role === 'user') {
        contracts = await getMyContracts(db, email, locale);
      }

      // 관리자일 경우
      else if (role === 'admin') {
        contracts = await getContracts(db, locale);
      }

      res.render('contract/leaseManagement', { contracts });
    })
  );

  // 견적요청 상세
  router.get(
    '/request',
    authorizeUser,
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        query: {
          warehouse_id,
          start_date,
          end_date,
          req_area,
          available_area,
          total_cost,
        },
      } = req;

      // 파라미터 확인
      checkEstimateParameter(
        warehouse_id,
        start_date,
        end_date,
        req_area,
        available_area,
        total_cost
      );

      const warehouse = await getWarehouseDetail(db, locale, warehouse_id);

      res.render('contract/estimateDetail', {
        warehouse,
        user: { email },
        lease_info: {
          start_date,
          end_date,
          available_area,
          req_area,
          total_cost,
        },
      });
    })
  );

  // 계약 상세
  router.get(
    '/:id',
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        params: { id: contract_id },
      } = req;
      const {
        session: { name, email, phone },
      } = req;

      const user = {
        name,
        email,
        phone,
      };

      const contract = await getContractDetail(db, contract_id);
      const warehouse = await getWarehouseDetail(
        db,
        locale,
        contract.warehouse_id
      );

      res.render('contract/contractDetail', {
        user,
        warehouse,
        contract_info: contract,
      });
    })
  );

  return router;
};
