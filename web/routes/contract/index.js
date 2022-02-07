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
      type: "user"
    };
    const contracts = [
      {
        id: "202101001",
        state: 1,
        name: "좋은창고",
        period: "2021-01-24~2021-05-31",
        area: "2000평",
        price: "600000원",
        request_date: "2021-01-24"
      },
      {
        id: "202101002",
        state: 2,
        name: "좋은창고",
        period: "2021-01-24~2021-05-31",
        area: "2000평",
        price: "600000원",
        request_date: "2021-01-24"
      }
    ];
    res.render('common/leaseManagement', {
      user,
      contracts
    });
  });



  router.get('/:id', (req, res) => {
    res.render('common/contractDetail', {});
  });

  return router;
};
