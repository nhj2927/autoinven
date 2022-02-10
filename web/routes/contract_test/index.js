const getContractDetail = require('./function/getContractDetail');

module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getWarehouseDetail = require('../warehouse_test/function/getWarehouseDetail');
  const getMyContracts = require('./function/getMyContracts');
  const getContracts = require('./function/getContracts');

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

  // 견적요청 상세
  router.get(
    '/contract/request',
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

      // 모든 파라미터가 있을때만 통과
      const checkParameter = (
        warehouse_id,
        start_date,
        end_date,
        req_area,
        available_area,
        total_cost
      ) => {
        return (
          warehouse_id &&
          start_date &&
          end_date &&
          req_area &&
          available_area &&
          total_cost
        );
      };

      // 파라미터 조건 통과 못할시 에러
      const throwInsufficientParameterError = () => {
        const error = new Error('Insufficient parameter');
        error.statusCode = 400;

        throw error;
      };

      if (
        !checkParameter(
          warehouse_id,
          start_date,
          end_date,
          req_area,
          available_area,
          total_cost
        )
      ) {
        throwInsufficientParameterError();
      }

      const warehouse = await getWarehouseDetail(db, locale, warehouse_id);

      res.render('contract/estimateDetail', {
        warehouse,
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

  return router;
};
