module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const editMyinfo = require('./editMyinfo');
  const editPassword = require('./editPassword');

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

  //비밀번호 수정
  router.put(
    '/password',
    doAsync(async (req, res) => {
      const {
        body: { current_password, new_password },
      } = req;

      await editPassword(current_password, new_password, db);

      res.status(200).json({
        message: 'success',
      });
    })
  );

  return router;
};
