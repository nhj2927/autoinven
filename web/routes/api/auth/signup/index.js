module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  //회원가입
  router.post('/', (req, res) => {});

  //이메일 인증
  router.post('/email', (req, res) => {});

  return router;
};
