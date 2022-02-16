const axios = require('axios');
const schedule = require('node-schedule');

module.exports = (db) => {
  // 하루에 한번 갱신
  schedule.scheduleJob('0 * * *', async () => {
    try {
      const result = await axios({
        method: 'GET',
        url: 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON',
        params: {
          authkey: process.env.EXCHANGE_RATE_AUTH_KEY,
          data: 'AP01',
        },
      });
      let deal_bas_r = 0;

      // 미국 환율 설정
      result.data.forEach((data) => {
        if (data.cur_unit === 'USD') {
          deal_bas_r = parseFloat(data.deal_bas_r.replaceAll(',', ''));
        }
      });

      // 데이터베이스에 저장
      const [rate, created] = await db.ExchangeRate.findOrCreate({
        where: { cur_unit: 'USD' },
        defaults: { deal_bas_r },
      });
      if (!created) {
        rate.deal_bas_r = deal_bas_r;
        rate.save();
      }
    } catch (err) {
      console.log(err);
    }
  });
};
