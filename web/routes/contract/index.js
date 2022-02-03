module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getContracts = require('./getContracts');

  router.get(
    '/',
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        session: { type, email },
      } = req;

      const contracts = await getContracts(db, email, locale);

      res.render('common/leaseManagement', {
        type,
        locale,
        contracts,
      });
    })
  );

  router.get('/:id', (req, res) => {
    res.render('common/contractDetail', {});
  });

  return router;
};
