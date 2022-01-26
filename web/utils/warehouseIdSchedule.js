const schedule = require('node-schedule');

const job = () => {
  schedule.scheduleJob('0 0 0 1 * *', () => {
    console.log(`warehouse initailzie job`);
    console.log(`warehouse register count of month : ${wdId}`);
    wdId += 1;
    console.log(`finished now warehouse id is ${wdId}`);
  });
};

module.exports = {
  job,
};
