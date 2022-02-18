const schedule = require('node-schedule');
const { Op } = require('sequelize');

module.exports = async (db) => {
  // 하루에 한번 계약 만료시키기
  schedule.scheduleJob('0 0 * * *', async () => {
    try {
      await db.LeaseContract.update(
        { c_state_id: 5 },
        {
          where: {
            end_date: {
              [Op.lt]: new Date(),
            },
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  });
};
