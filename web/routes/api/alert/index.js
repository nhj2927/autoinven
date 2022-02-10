module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const alert = require('./alert');

  // 센서값 비정상일때 문자메세지 알림
  router.get(
    '/',
    doAsync(async (req, res) => {
      await alert(db, req.headers['client-ip']);

      res.status(200).json({
        message: 'success',
      });
    })
  );

  return router;
};
