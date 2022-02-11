const getImages = (images) => {
  if (!images || !images.length) {
    return [];
  } else {
    return images.map((img) => {
      return img.url;
    });
  }
};

module.exports = async (db, locale, user_email) => {
  const { fn, col } = require('sequelize');
  const getFullAddress = require('$base/utils/getFullAddress');
  const getLocaleLanguageValue = require('$base/utils/getLocaleLanguageValue');
  const where_clause = user_email ? { user_email, c_state_id: 3 } : null;

  const contracts_result = await db.LeaseContract.findAll({
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
    where: where_clause,
    include: {
      model: db.Warehouse,
      required: true,
      attributes: [
        'warehouse_id',
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
        attributes: ['url'],
      },
    },
  });

  const warehouses = contracts_result.map((contract) => {
    return {
      warehouse_id: contract.Warehouse.warehouse_id,
      start_date: contract.start_date,
      end_date: contract.end_date,
      name: getLocaleLanguageValue(
        locale,
        contract.Warehouse.name_ko,
        contract.Warehouse.name_en
      ),
      address: getLocaleLanguageValue(
        locale,
        getFullAddress(
          contract.Warehouse.address1_ko,
          contract.Warehouse.address2_ko
        ),
        getFullAddress(
          contract.Warehouse.address1_en,
          contract.Warehouse.address2_en
        )
      ),
      area: contract.lease_area,
      is_verified: contract.Warehouse.is_verified,
      image_url: getImages(contract.Warehouse.WarehouseImages),
    };
  });

  return warehouses;
};
