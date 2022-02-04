module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const user = {
    type: 'admin',
  };
  router.get('/warehouse/:id', (req, res) => {
    res.render('user/warehouseDetail', {
      user: user,
      warehouse_id: 1,
      name: '대구 광역시 글로벌 물류센터',
      category: '일반창고',
      rent: '800', //per month per day
      address1: '대구 광역시 북구 산격동 111-22',
      address2: '대구 스마트 물류단지 내부',
      land_area: 9000,
      common_area: 2900,
      dedicated_area: 6000,
      total_ground_area: 8900,
      story: 3,
      height: 11,
      restriction: '전차종 출입가능',
      completion_date: '2021-08-28',
      access: '정왕IC 9km, 남안산IC 10km',
      description: '깔끔한 신축 물류 창고 입니다.',
      note: '□ 물류장비 - 지게차 5대 : 전동 5대 파렛트 - 목재 : 단면 양방향 1000ea(1000＊1200), □ 보안설비 - 보안시스템 완비(출입보안, CCTV 등) □ 화재설비 - 소화기, 소화전, 화재경보기, 화재감지기, 가스누설경보기, 피난기구, 스프링쿨러 등',
      is_bonded: true,
      commercial_lift: true,
      is_verified: true,
      docking_station: true,
      rack: true,
      user_email: 'daegujjang@gmail.com',
      phone: '053-123-4567',
      iot_url: 'http://192.168.0.149:8000',
      images: [
        '/image/test_image_1.jpg',
        '/image/test_image_2.jpg',
        '/image/test_image_3.jpg',
      ], //url들
      selected_start_date: '2021-11-01',
      selected_end_date: '2021-11-12',
      selected_area: 500,
      max_area: 700,
    });
  });

  router.get('/contract/request', (req, res) => {
    res.render('user/contractRequestDetail', {});
  });

  return router;
};
