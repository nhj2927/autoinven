const getPaymentType = (payment) => {
  return payment ? payment.type : null;
};

module.exports = async (db, l_contract_id) => {
  const { fn, col } = require('sequelize');

  const contract_result = await db.LeaseContract.findOne({
    attributes: {
      include: [
        [
          fn('date_format', col('LeaseContract.start_date'), '%Y-%m-%d'),
          'start_date',
        ],
        [
          fn('date_format', col('LeaseContract.end_date'), '%Y-%m-%d'),
          'end_date',
        ],
      ],
    },
    where: { l_contract_id },
    include: {
      model: db.Payment,
      attributes: ['type'],
    },
  });

  if (!contract_result) {
    const error = new Error('Contract Not Found');
    error.statusCode = 404;

    throw error;
  }

  return {
    warehouse_id: contract_result.warehouse_id,
    l_contract_id: contract_result.l_contract_id,
    c_state_id: contract_result.c_state_id,
    start_date: contract_result.start_date,
    end_date: contract_result.end_date,
    req_area: contract_result.lease_area,
    total_cost: contract_result.amount,
    purpose: contract_result.purpose,
    note: contract_result.note,
    payment: getPaymentType(contract_result.Payment),
  };
};
