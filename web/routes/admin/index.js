module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const getContracts = require('./getContracts');

  router.get(
    '/contract',
    doAsync(async (req, res) => {
      const locale = res.locale;

      const contracts = await getContracts(db, locale);

      res.render('admin/adminLeaseManagement', { contracts });
    })
  );

  router.use('/warehouse', require('./warehouse')(db));

  return router;
};
