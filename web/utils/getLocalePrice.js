// 미국 환율 조회
const getUSDExchangeRate = async () => {
  const db = require('$base/models');
  let rate_result = null;

  try {
    rate_result = await db.ExchangeRate.findByPk('USD');
  } catch (err) {
    console.log(err);
  }
  if (!rate_result) {
    throw new Error('ExcangeRate Not Found');
  }

  return rate_result.deal_bas_r;
};

let rate = null;

// 언어에 맞는 임대료 반환
module.exports = async (locale, rent) => {
  if (!rent) {
    return null;
  } else {
    if (locale === 'en') {
      if (!rate) {
        try {
          rate = await getUSDExchangeRate();
        } catch (err) {
          console.log(err);
        }
      }
      return parseFloat((rent / rate).toFixed(2));
    } else {
      return rent;
    }
  }
};
