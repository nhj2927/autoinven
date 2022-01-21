module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  //계약 요청
  router.post('/request', (req, res) => {});

  //계약 승인
  router.put('/:contract_id/approve', (req, res) => {});

  //계약 완료
  router.put('/:contract_id/completion', (req, res) => {});

  // 추후구현(결제)
  router.put('/:contract_id/payment', (req, res) => {});

  return router;
};
