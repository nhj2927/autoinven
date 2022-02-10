module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');

  // 메인페이지
  router.get('/', (req, res) => {
    res.render('main');
  });

  // 로그인
  router.get('/signin', (req, res) => {
    res.render('auth/signin');
  });

  // 회원가입
  router.get('/signup', (req, res) => {
    res.render('auth/signup');
  });

  // 창고 검색
  router.get(
    '/search',
    doAsync(async (req, res) => {
      const warehouses = await db.Warehouse.findAll({
        include: [
          {
            model: db.Address,
            attributes: ['latitude', 'longitude', 'zip_code'],
          },
          {
            model: db.WarehouseImage,
          },
        ],
      });
      res.render('common/search', { warehouses, user });
    })
  );

  // 내 정보 수정
  router.get('/myinfo', (req, res) => {
    const { email, name, phone } = req.session;
    const user = {
      email,
      name,
      phone,
    };
    res.render('myInfo', { user });
  });

  // 창고
  router.use('/warehouse', require('./warehouse_test')(db));

  // 계약
  router.use('/contract', require('./contract_test')(db));

  return router;
};
