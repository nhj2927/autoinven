module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getWarehouseDetail = require('./getWarehouseDetail');

  router.get(
    '/warehouse/:id',
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        params: { id: warehouse_id },
      } = req;
      const {
        query: { start_date, end_date, selected_area, available_area },
      } = req;

      // 창고ID를 제외한 파라미터가 모두 있거나 없는 경우만 통과
      const checkParameter = (
        warehouse_id,
        start_date,
        end_date,
        selected_area,
        available_area
      ) => {
        return (
          (warehouse_id &&
            !start_date &&
            !end_date &&
            !selected_area &&
            !available_area) ||
          (warehouse_id &&
            start_date &&
            end_date &&
            selected_area &&
            available_area)
        );
      };

      if (
        !checkParameter(
          warehouse_id,
          start_date,
          end_date,
          selected_area,
          available_area
        )
      ) {
        const error = new Error('Insufficient parameter');
        error.statusCode = 400;

        throw error;
      }

      const warehouse = await getWarehouseDetail(db, locale, warehouse_id);

      res.render('user/warehouseDetail', {
        ...warehouse,
        selected_start_date: start_date,
        selected_end_date: end_date,
        selected_area,
        available_area,
      });
    })
  );

  router.get('/contract/request', (req, res) => {
    res.render('user/contractRequestDetail', {});
  });

  return router;
};
