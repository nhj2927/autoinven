const { Op } = require('sequelize');
const { Sequelize } = require('../../../models');
const getAllWarehouses = async (db) => {
  warehouses = await db.Warehouse.findAll();
  return warehouses;
};

const registerWarehouse = async (req, db) => {
  const newWarehouse = req.body;
  const warehouse = await db.Warehouse.create(newWarehouse);
  return warehouse;
};

const editWarehouse = async (req, db) => {
  const { warehouse_id } = req.params;
  const newInfo = req.body;
  const result = await db.Warehouse.update(newInfo, {
    where: { warehouse_id },
  });
  if (result[0]) {
    return result[0];
  } else {
    const err = new Error('User not found');
    err.statusCode = 404;
    throw err;
    //res.status(404).send({ message: 'There is no such with the id!' });
  }
};

const searchWarehouse = async (req, db) => {
  const { startDate, endDate, type, area } = req.query;
  // 1. 기간이 있다면
  if (startDate) {
    //(1) 해당 기간이 포함 된 계약 모두 조회
    //  - warehouse_id 로 그룹
    //  - 각 창고별로 대여 공간 합 구하기
    const warehouseResults = await db.LeaseContract.findAll({
      attributes: [
        'warehouse_id',
        [
          db.sequelize.fn('SUM', db.sequelize.col('lease_area')),
          'total_lease_area',
        ],
      ],
      where: {
        [Op.or]: [
          {
            start_date: {
              [Op.between]: [startDate, startDate],
            },
          },
          {
            end_date: {
              [Op.between]: [startDate, startDate],
            },
          },
        ],
      },
      group: 'warehouse_id',
    });
    //(2) (각 창고의 사용가능공간 - 각 창고의 대여공간 합) > 대여할 공간 인 창고만 고르기
    await db.Warehouse.findAll({
      attributes: [
        'warehouse_id',
        [
          db.sequelize.literal('dedicated_area - total_lease_area'),
          available_area,
        ],
      ],
      include: [
        {
          model: db.LeaseContract,
          attributes: [
            'warehouse_id',
            [
              db.sequelize.fn('SUM', db.sequelize.col('lease_area')),
              'total_lease_area',
            ],
          ],
          where: {
            [Op.or]: [
              {
                start_date: {
                  [Op.between]: [startDate, startDate],
                },
              },
              {
                end_date: {
                  [Op.between]: [startDate, startDate],
                },
              },
            ],
          },
          group: 'warehouse_id',
        },
      ],
      where: { 'dedicated_area - total_lease_area': { [db.Op.gte]: area } },
    });
    //(3) 해당 창고들을 return
    //  - 호출한 함수에서 지도에 찍고, 거리순으로 리스팅
  }
};

module.exports = {
  getAllWarehouses,
  registerWarehouse,
  editWarehouse,
  searchWarehouse,
};
