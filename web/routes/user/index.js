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

      console.log('===============' + warehouse);

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
    const user = {
      type: 'admin',
    };
    res.render('user/contractRequestDetail', {
      user: user,
      warehouse: {
        name: '대구 광역시 글로벌 물류센터',
        type: '일반 창고',
        address1: '대구 광역시 북구 산격동 112-13',
        address2: '대구 스마트 물류단지 내부',
        description: '깔끔한 신축창고 입니다.',
        land_area: 9000,
        common_area: 2900,
        dedicated_area: 6000,
        total_ground_area: 8900,
        rent: 800,
      },
      lease_info: {
        start_date: '2022-01-13',
        end_date: '2022-02-14',
        available_area: 3000,
        req_area: 1000,
        total_cost: 100000,
      },
    });
  });

  return router;
};
