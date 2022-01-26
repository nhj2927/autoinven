module.exports = (db) => {
  const express = require('express');
  const router = express.Router();
  const { doAsync } = require('$base/utils/asyncWrapper');
  const contractAPIs = require('./contractAPIs');
  // 승인 : 2, 완료 : 3, 거절 : 4
  // To-Do
  // 1. 결제 API 구현

  // 1) 계약 요청
  router.post(
    '/request',
    doAsync(async (req, res) => {
      const newContract = await contractAPIs.createContract(req, db);
    })
  );

  // 2) 계약 승인
  router.put(
    '/:contract_id/approve',
    doAsync(async (req, res) => {
      const contractId = req.params.contract_id;
      const result = await contractAPIs.changeContractState(2, contractId, db);
      res.send({ message: `${result} row(s) affected` });
    })
  );

  // 3) 계약 완료
  router.put(
    '/:contract_id/completion',
    doAsync(async (req, res) => {
      const contractId = req.params.contract_id;
      const result = await contractAPIs.changeContractState(3, contractId, db);
      res.send({ message: `${result} row(s) affected` });
    })
  );

  // 4) 승인 거절
  router.put(
    '/:contract_id/reject',
    doAsync(async (req, res) => {
      const contractId = req.params.contract_id;
      const result = await contractAPIs.changeContractState(4, contractId, db);
      res.send({ message: `${result} row(s) affected` });
    })
  );

  // 5) 추후구현(결제)
  router.put('/:contract_id/payment', (req, res) => {});

  return router;
};
