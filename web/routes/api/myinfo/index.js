module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const editMyinfo = require('./editMyinfo');

  //내정보 수정
  router.put(
    '/',
    doAsync(async (req, res) => {
      const { body: user_info } = req;

      await editMyinfo(user_info, db);

      res.status(200).json({
        message: 'success',
      });
    })
  );

  router.put('/password', (req, res) => {});

  return router;
};
