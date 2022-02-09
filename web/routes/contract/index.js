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
        session: { email },
      } = req;

      const contracts = await getUserContracts(db, email, locale);

      res.render('common/leaseManagement', { contracts });
    })
  );

  router.get('/:id', (req, res) => {
    const user = {
      type: 'user',
      name: '나현준',
      email: 'stupid@gmail.com',
      phone: '010-1234-5667',
    };

    res.render('common/contractDetail', {
      user: user,
      role: 'admin',
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
        l_contract_id: 1,
        start_date: '2022-01-13',
        end_date: '2022-02-14',
        available_area: 3000,
        req_area: 1000,
        total_cost: 100000,
        purpose: '재고 물품 보관',
        note: '습기가 적었으면 좋겠습니다.',
        payment: '신용카드',
        c_state_id: 1, // 1: 승인 대기, 2: 결제 대기, 3: 완료, 4: 승인 거부, 5: 기간 만료
      },
    });
  });

  return router;
};
