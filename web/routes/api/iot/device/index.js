module.exports = (db) => {
  const express = require('express');
  const { doAsync } = require('$base/utils/asyncWrapper');
  const router = express.Router();
  const deviceAPIs = require('./deviceAPIs');

  router.put(
    '/:device_id',
    doAsync(async (req, res) => {
      console.log(req.body);
      
      const result = await deviceAPIs.updateDeviceUrl(req, db);
      res.send({ message: `${result} row(s) affected` });
    })
  );

  return router;
};
