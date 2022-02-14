module.exports = (db) => {
  const express = require('express');
  const router = express.Router({ mergeParams: true });

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getWarehouseDetailForIot = require('./function/getWarehouseDetailForIot');

  // 창고 모니터링
  router.get(
    '/monitoring',
    doAsync(async (req, res) => {
      const {
        params: { id: warehouse_id },
      } = req;
      const {
        session: { name },
      } = req;

      const warehouse = await getWarehouseDetailForIot(db, warehouse_id);

      res.render('/iot/monitoring', {
        user: {
          name,
        },
        warehouse,
      });
    })
  );

  // 창고 통계
  router.get('/statistics', (req, res) => {
    res.render('/iot/statistics');
  });

  return router;
};
