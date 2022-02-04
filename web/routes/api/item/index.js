module.exports = (db) => {
  const express = require('express');
  const router = express.Router();
  const itemAPIs = require('./itemAPIs');
  const { doAsync } = require('$base/utils/asyncWrapper');
  const multer = require('multer');
  const upload = multer({ dest: 'uploads/' });
  // To-Do
  // 1. 모바일 관련 API 추가해야함
  router.get(
    '/',
    doAsync(async (req, res) => {
      const items = await itemAPIs.getAllItems(db);
      res.send(items);
    })
  );

  router.get(
    '/:item_id',
    doAsync(async (req, res) => {
      const item = await itemAPIs.getItem(req.params.item_id, db);
      res.send(item);
    })
  );

  router.post(
    '/',
    upload.array('images', 6),
    doAsync(async (req, res) => {
      const item = await itemAPIs.registerItem(req, db);
      res.send(item);
    })
  );
  router.put(
    '/:item_id',
    upload.array('images', 6),
    doAsync(async (req, res) => {
      const result = await itemAPIs.editItem(req, db);
      res.send({ message: `${result} row(s) affected` });
    })
  );

  //입고
  router.put(
    '/:item_id/in',
    doAsync(async (req, res) => {
      const { item_id } = req.params;
      const result = await itemAPIs.itemStateChange(item_id, 2, db);
      res.send(result);
    })
  );
  //출고
  router.put(
    '/:item_id/out',
    doAsync(async (req, res) => {
      const { item_id } = req.params;
      const result = await itemAPIs.itemStateChange(item_id, 3, db);
      res.send(result);
    })
  );

  //QR 출력
  router.get(
    '/:item_id/qr',
    doAsync(async (req, res) => {
      const { item_id } = req.params;
      const qrcode = await itemAPIs.sendQR(item_id, db);
      console.log(qrcode);
      //res.writeHead(200, { 'Content-Type': 'image/png' });
      res.send(qrcode);
    })
  );

  return router;
};
