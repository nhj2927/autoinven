// 웹 요청인지 앱 요청인지 확인
module.exports = (user_agent) => {
  if (user_agent.includes('okhttp')) {
    return 'app';
  } else {
    return 'web';
  }
};
