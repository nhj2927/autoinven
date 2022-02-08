module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getUserContracts = require('./getUserContracts');

  router.get(
    '/',
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        session: { type, email },
      } = req;

      const contracts = await getUserContracts(db, email, locale);

      res.render('common/leaseManagement', {
        type,
        contracts,
      });
    })
  );
  router.get('/', (req, res) => {
    const user = {
      type: 'user',
    };
    const contracts = [
      {
        id: '202101001',
        state: 1,
        name: '좋은창고',
        period: '2021-01-24~2021-05-31',
        area: '2000평',
        price: '600000원',
        request_date: '2021-01-24',
      },
      {
        id: '202101002',
        state: 2,
        name: '좋은창고',
        period: '2021-01-24~2021-05-31',
        area: '2000평',
        price: '600000원',
        request_date: '2021-01-24',
      },
    ];
    res.render('common/leaseManagement', {
      user,
      contracts,
    });
  });

  router.get('/:id', (req, res) => {
    const user = {
      type: 'user',
      name: '나현준',
      email: 'stupid@gmail.com',
      phone: '010-1234-5667',
    };

    res.render('common/contractDetail', {
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
      contract_info: {
        start_date: '2022-01-13',
        end_date: '2022-02-14',
        available_area: 3000,
        req_area: 1000,
        total_cost: 100000,
        purpose: '재고 물품 보관',
        note: '습기가 적었으면 좋겠습니다.',
        payment: '신용카드',
        c_state_id: 3, // 1: 승인 대기, 2: 결제 대기, 3: 완료, 4: 승인 거부, 5: 기간 만료
      },
    });
  });

  return router;
};
