module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getContracts = require('./getContracts');

  router.get(
    '/contract',
    doAsync(async (req, res) => {
      const locale = res.locale;
      const {
        session: { type },
      } = req;

      const contracts = await getContracts(db, locale);

      res.render('admin/adminLeaseManagement', {
        type,
        contracts,
      });
    })
  );

  router.use('/warehouse', require('./warehouse')(db));

  return router;
};
