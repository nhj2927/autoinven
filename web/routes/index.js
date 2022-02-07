module.exports = (db) => {
  const express = require('express');
  const router = express.Router();
  const { doAsync } = require('$base/utils/asyncWrapper');

  router.get('/', (req, res) => {
    res.render('main', {});
  });

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
      console.log(warehouses[0]);
      res.render('common/search', { warehouses: warehouses });
    })
  );

  router.get('/myinfo', (req, res) => {
<<<<<<< HEAD
    const { email, type, name, phone } = req.session;
    const user = {
      email,
      type,
      name,
      phone,
    };
    res.render('common/myInfo', { user });
=======

    const user = {
      type: "admin",
      email: "nhj2927@naver.com",
      name: "나현준",
      phone: "010-1234-5647"
    };
    res.render('common/myInfo', {
      user
    });
>>>>>>> da6c925e448dca4378eaa896d876e96362f03584
  });

  router.use('/warehouse', require('./warehouse')(db));
  router.use('/contract', require('./contract')(db));
  router.use('/item', require('./item')(db));

  return router;
};
