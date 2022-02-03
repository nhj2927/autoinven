module.exports = async (db, user_email, locale) => {
  const { fn, col } = require('sequelize');

  const contracts_result = await db.LeaseContract.findAll({
    attributes: [
      'l_contract_id',
      'c_state_id',
      [
        fn('date_format', col('LeaseContract.start_date'), '%Y-%m-%d'),
        'start_date',
      ],
      [
        fn('date_format', col('LeaseContract.end_date'), '%Y-%m-%d'),
        'end_date',
      ],
      'lease_area',
      'amount',
      [
        fn('date_format', col('LeaseContract.createdAt'), '%Y-%m-%d'),
        'createdAt',
      ],
    ],
    where: { user_email },
    include: {
      model: db.Warehouse,
      attributes: ['name_ko', 'name_en'],
    },
  });

  const contracts = contracts_result.map((contract) => {
    return {
      id: contract.l_contract_id,
      state: contract.c_state_id,
      name:
        locale === 'ko'
          ? contract.Warehouse.name_ko
          : contract.Warehouse.name_en,
      period: `${contract.start_date} ~ ${contract.end_date}`,
      area: contract.lease_area,
      price: contract.amount,
      contract_date: contract.createdAt,
    };
  });

  return contracts;
};
