module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  // 창고 모니터링
  router.get('/monitoring', (req, res) => {
    res.render('iot/monitoring');
  });

  // 창고 통계
  router.get('/statistics', (req, res) => {
    res.render('/iot/statistics');
  });

  return router;
};
