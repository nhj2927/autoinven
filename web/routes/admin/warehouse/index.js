module.exports = (db) => {
  const express = require('express');
  const router = express.Router();

  router.get('/enroll', (req, res) => {
    const user = {
      type: 'admin',
    };
    res.render('admin/enrollWarehouse', {
      user: user,
    });
  });

  router.get('/:warehouse_id/edit', (req, res) => {
    res.render('admin/editWarehouse', {});
  });

  return router;
};
