// 유저가 해당 창고와 계약되어있는지 확인
module.exports = async (db, user_email, warehouse_id) => {
  const { Op } = require('sequelize');

  const contract_result = await db.LeaseContract.findOne({
    attributes: ['l_contract_id'],
    where: { [Op.and]: [{ user_email, warehouse_id, c_state_id: 3 }] },
  });

  if (contract_result) {
    return contract_result.l_contract_id;
  } else {
    return false;
  }
};
