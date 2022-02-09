// 언어에 맞게 값 선택
module.exports = (locale, value_ko, value_en) => {
  return locale === 'ko' ? value_ko : value_en;
};
