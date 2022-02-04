module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    const warehouses = [
      {
        name: "창고창고",
        address: "대구광역시 북구 산격로 80",
        area: "2000",
        period: "21.12.22~22.02.18",
        is_verified: 1
      },
      {
        name: "창고조아",
        address: "대구광역시 달서구 월성로 100",
        area: "1000",
        period: "21.12.22~22.02.18",
        is_verified: 1
      },
    ]
    res.render('common/warehouse', {});
  });

  router.get('/:warehouse_id', (req, res) => {
    res.render('common/warehouseDetailWithItem', {});
  });

  router.use('/:warehouse_id/iot', require('./iot')(db));

  return router;
};
