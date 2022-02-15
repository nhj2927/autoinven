const { Op } = require('sequelize');

const getIotUrl = async (db, req) => {
  const warehouse_id = req.params.id;

  const urls = await db.IotDevice.findAll({
    where: { warehouse_id, url: { [Op.ne]: null } },
  });

  if (urls) {
    return urls;
  } else {
    let err = new Error('url find error');
    err.statusCode(400);
    throw err;
  }
};

module.exports = {
  getIotUrl,
};
