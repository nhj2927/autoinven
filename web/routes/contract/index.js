module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getUserContracts = require('./getUserContracts');
  const getWarehouseDetail = require('../user/getWarehouseDetail');
  const getContractDetail = require('./getContractDetail');

  router.get(
    '/',
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        session: { email },
      } = req;

      const contracts = await getUserContracts(db, email, locale);

      res.render('common/leaseManagement', { contracts });
    })
  );

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

      res.render('common/contractDetail', {
        user,
        warehouse,
        contract_info: contract,
      });
    })
  );

  return router;
};
