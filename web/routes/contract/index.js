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

  router.get('/:id', (req, res) => {
    res.render('common/contractDetail', {});
  });

  return router;
};
