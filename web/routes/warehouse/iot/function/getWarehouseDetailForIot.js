const getIotUrl = (iot_devices) => {
  if (!iot_devices || !iot_devices.length) {
    return [];
  } else {
    return iot_devices.map((iot) => {
      return iot.url;
    });
  }
};

const getImage = (images) => {
  if (!images || !images.length) {
    return null;
  } else {
    return images[0].url;
  }
};

module.exports = async (db, warehouse_id) => {
  const { literal } = require('sequelize');

  const warehouse_result = await db.Warehouse.findOne({
    attributes: [
      'warehouse_id',
      'dedicated_area',
      [literal('IFNULL(SUM(lease_area), 0)'), 'used_area'],
    ],
    where: { warehouse_id },
    group: [
      'warehouse_id',
      'dedicated_area',
      'latitude',
      'longitude',
      'IotDevices.device_id',
      'IotDevices.url',
      'WarehouseImages.url',
    ],
    include: [
      {
        model: db.Address,
        required: true,
        attributes: ['latitude', 'longitude'],
      },
      {
        model: db.IotDevice,
        attributes: ['url'],
      },
      {
        model: db.WarehouseImage,
        attributes: ['url'],
      },
      {
        model: db.LeaseContract,
        attributes: [],
        required: false,
        where: {
          c_state_id: 3,
        },
      },
    ],
  });

  if (!warehouse_result) {
    const error = new Error('Warehouse Not Found');
    error.statusCode = 404;

    throw error;
  }

  return {
    warehouse_id: warehouse_result.warehouse_id,
    dedicated_area: warehouse_result.dedicated_area,
    used_area: warehouse_result.get('used_area'),
    latitude: warehouse_result.Address.latitude,
    longitude: warehouse_result.Address.longitude,
    iot_url: getIotUrl(warehouse_result.IotDevices),
    image: getImage(warehouse_result.WarehouseImages),
  };
};
