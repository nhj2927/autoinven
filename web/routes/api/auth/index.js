module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  const { doAsync } = require('$base/utils/asyncWrapper');
  const checkClientType = require('$base/utils/checkClientType');
  const signout = require('./function/signout');
  const signin = require('./function/signin');

  router.post(
    '/signin',
    doAsync(async (req, res) => {
      const {
        body: { email, password },
      } = req;
      console.log(req.body);
      console.log(req.params);
      console.log(req.query);

      const result = await signin(
        email,
        password,
        db,
        req.session,
        checkClientType(req.headers['user-agent'])
      );

      res.status(200).json(result);
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
