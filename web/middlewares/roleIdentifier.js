const checkClientType = require('$base/utils/checkClientType');
module.exports = (req, res, next) => {
  const request_type = checkClientType(req.headers['user-agent']);

  // 웹 요청
  if (request_type === 'web') {
    if (req.session.role) {
      res.locals.role = req.session.role;
    }
  }
  next();
};
