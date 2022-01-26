const { Op, literal } = require('sequelize');

const createContract = async (req, db) => {
  const newConstract = req.body;
  const contract = await db.LeaseContract.create(newConstract);
  return contract;
};

const changeContractState = async (state, id, db) => {
  const newInfo = { c_state_id: state };
  const result = await db.LeaseContract.update(newInfo, {
    where: { l_contract_id: id },
  });
  if (result[0]) {
    const contractTimestamp = await db.ContractTimestamp.create({
      l_contract_id: id,
      c_state_id: state,
    });
    if (contractTimestamp) return result[0];
    else {
      const err = new Error('Contract state change logging is failed');
      err.statusCode = 500;
      throw err;
    }
  } else {
    const err = new Error('There is no such with the id!');
    err.statusCode = 404;
    throw err;
  }
};

module.exports = {
  createContract,
  changeContractState,
};
