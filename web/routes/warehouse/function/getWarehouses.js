const { fn, col } = require('sequelize');
const getFullAddress = require('$base/utils/getFullAddress');
const getLocaleLanguageValue = require('$base/utils/getLocaleLanguageValue');

const getImage = (images) => {
  if (!images || !images.length) {
    return null;
  } else {
    return images[0].url;
  }
};

// 유저와 계약된 창고목록
const getMyWarehouses = async (db, locale, user_email) => {
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
    where: { user_email, c_state_id: 3 },
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

  return contracts_result.map((contract) => {
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
      image: getImage(contract.Warehouse.WarehouseImages),
    };
  });
};

// 모든 창고목록
const getAllWarehouses = async (db, locale) => {
  const warehouses_result = await db.Wareshouse.findAll({
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
  });

  return warehouses_result.map((warehouse) => {
    return {
      warehouse_id: warehouse.warehouse_id,
      name: getLocaleLanguageValue(
        locale,
        warehouse.name_ko,
        warehouse.name_en
      ),
      address: getLocaleLanguageValue(
        locale,
        getFullAddress(warehouse.address1_ko, warehouse.address2_ko),
        getFullAddress(warehouse.address1_en, warehouse.address2_en)
      ),
      is_verified: contract.Warehouse.is_verified,
      images: getImage(warehouse.WarehouseImages),
    };
  });
};

module.exports = async (db, locale, user_email) => {
  let warehouses = [];

  // 유저일 경우
  if (user_email) {
    warehouses = getMyWarehouses(db, locale, user_email);
  }

  // 관리자일 경우
  else {
    warehouses = getAllWarehouses(db, locale);
  }

  return warehouses;
};
