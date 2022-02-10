module.exports = (db) => {
  const express = require('express');
  const router = express.Router();
  const { doAsync } = require('$base/utils/asyncWrapper');
  const qrcode = require('qrcode');

  // QR코드
  router.get(
    '/:item_id/qr',
    doAsync(async (req, res) => {
      const { item_id } = req.params;
      const item = await db.Item.findOne({ where: { item_id } });
      console.log(item.qrcode);
      const qr_code = await qrcode.toDataURL(item.qrcode);
      res.render('partial/qrPopup', { qr_code });
    })
  );

  return router;
};
