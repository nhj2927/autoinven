module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const signout = require('./signout');
  const signin = require('./signin');

  router.post(
    '/signin',
    doAsync(async (req, res) => {
      const {
        body: { email, password },
      } = req;

      await signin(email, password, db, req.session);

      res.json({
        message: 'success',
      });
    })
  );

  router.use('/signup', require('./signup')(db));

  router.get('/signout', (req, res, next) => {
    try {
      signout(req.session);

      res.json({
        message: 'success',
      });
    } catch (err) {
      next(err);
    }
  });

  return router;
};
