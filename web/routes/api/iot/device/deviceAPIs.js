const updateDeviceUrl = async (req, db) => {
  const { device_id } = req.params;
  const { url } = req.body;
  const result = await db.IotDevice.update({ url }, { where: device_id });
  if (result) {
    return result[0];
  } else {
    const err = new Error('');
    err.statusCode(400);
    throw err;
  }
};

module.exports = {
  updateDeviceUrl,
};
