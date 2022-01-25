module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const signup = require('./signup');
  const verifyEmail = require('./verifyEmail');

  //회원가입
  router.post(
    '/',
    doAsync(async (req, res) => {
      const user_info = req.body;

      await signup(user_info, db);

      res.status(200).json({
        message: 'success',
      });
    })
  );

  //이메일 인증
  router.post(
    '/email',
    doAsync(async (req, res) => {
      const {
        body: { email },
      } = req;

      const auth_code = await verifyEmail(email);

      res.status(200).json({
        auth_code,
      });
    })
  );

  return router;
};
