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
    const { email, type, name, phone } = req.session;
    const user = {
      email,
      type,
      name,
      phone,
    };
    res.render('common/myInfo', { user });
  });

  router.use('/warehouse', require('./warehouse')(db));
  router.use('/contract', require('./contract')(db));

  return router;
};
