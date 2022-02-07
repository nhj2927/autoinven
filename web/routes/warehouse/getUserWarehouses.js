const getFullAddress = (address1, address2) => {
  return `${address1} ${address2}`;
};

module.exports = async (db, user_email, locale) => {
  const { fn, col } = require('sequelize');

  const warehouses_result = await db.LeaseContract.findAll({
    attributes: [
      [
        fn('date_format', col('LeaseContract.start_date'), '%Y-%m-%d'),
        'start_date',
      ],
      [
        fn('date_format', col('LeaseContract.end_date'), '%Y-%m-%d'),
        'end_date',
      ],
      'lease_area',
    ],
    where: { user_email },
    include: {
      model: db.Warehouse,
      required: true,
      attributes: [
        'name_ko',
        'name_en',
        'address1_ko',
        'address1_en',
        'address2_ko',
        'address2_en',
        'is_verified',
      ],
      include: {
        model: db.WarehouseImage,
        required: true,
        attributes: ['url'],
      },
    },
  });

  const warehouses = warehouses_result.map((warehouse) => {
    return {
      name:
        locale === 'ko'
          ? warehouse.Warehouse.name_ko
          : warehouse.Warehouse.name_en,
      address:
        locale === 'ko'
          ? getFullAddress(
              warehouse.Warehouse.address1_ko,
              warehouse.Warehouse.address2_ko
            )
          : getFullAddress(
              warehouse.Warehouse.address1_en,
              warehouse.Warehouse.address2_en
            ),
      area: warehouse.lease_area,
      is_verified: warehouse.Warehouse.is_verified,
      image_url: warehouse.Warehouse.WarehouseImages.map((image) => {
        return image.url;
      }),
    };
  });

  return warehouses;
};
