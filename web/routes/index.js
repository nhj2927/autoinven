module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('main', {});
  });

  router.get('/search', (req, res) => {
    res.render('common/search', {});
  });

  router.get('/myinfo', (req, res) => {

    const user = {
      type: "admin",
      email: "nhj2927@naver.com",
      name: "나현준",
      phone: "010-1234-5647"
    };
    res.render('common/myInfo', {
      user
    });
  });

  router.use('/warehouse', require('./warehouse')(db));
  router.use('/contract', require('./contract')(db));

  return router;
};
