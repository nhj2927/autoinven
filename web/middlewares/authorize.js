const checkClientType = require('$base/utils/checkClientType');

// 웹 인증
const authenticateWeb = (session) => {
  if (session.email) {
    return true;
  } else {
    return false;
  }
};

// 앱 인증
const authenticateApp = (token) => {
  const jwt = require('jsonwebtoken');
  const secret_key = process.env.JWT_SECRET_KEY;

  try {
    return jwt.verify(token, secret_key);
  } catch (err) {
    return null;
  }
};

// 관리자 인가
exports.authorizeAdmin = (req, res, next) => {
  // 웹 요청
  if (checkClientType(req.headers['user-agent']) === 'web') {
    // 인증 성공
    if (authenticateWeb(req.session)) {
      // 인가 성공
      if (req.session.role === 'admin') {
        res.locals.role = 'admin';
        next();
      }
      // 인가 실패
      else {
        const error = new Error('Unauthorized Error');
        err.statusCode = 403;
        next(error);
      }
    }
    // 인증 실패
    else {
      const error = new Error('Unauthenticated Error');
      err.statusCode = 401;
      next(error);
    }
  }

  // 앱 요청
  else {
    const user_info = authenticateApp(req.headers.token);

    // 인증 성공
    if (user_info) {
      // 인가 성공
      if (user_info.role === 'admin') {
        req.user = user_info;
        next();
      }
      // 인가 실패
      else {
        const error = new Error('Unauthorized Error');
        err.statusCode = 403;
        next(error);
      }
    }
    // 인증 실패
    else {
      const error = new Error('Unauthenticated Error');
      err.statusCode = 401;
      next(error);
    }
  }
};

// 유저 인가
exports.authorizeUser = (req, res, next) => {
  // 웹 요청
  if (checkClientType('web') === 'web') {
    // 인증 성공
    if (authenticateWeb(req.session)) {
      // 인가 성공
      if (req.session.role === 'user') {
        res.locals.role = 'user';
        next();
      }
      // 인가 실패
      else {
        const error = new Error('Unauthorized Error');
        err.statusCode = 403;
        next(error);
      }
    }
    // 인증 실패
    else {
      const error = new Error('Unauthenticated Error');
      err.statusCode = 401;
      next(error);
    }
  }

  // 앱 요청
  else {
    const user_info = authenticateApp(req.headers.token);

    // 인증 성공
    if (user_info) {
      // 인가 성공
      if (user_info.role === 'user') {
        req.user = user_info;
        next();
      }
      // 인가 실패
      else {
        const error = new Error('Unauthorized Error');
        err.statusCode = 403;
        next(error);
      }
    }
    // 인증 실패
    else {
      const error = new Error('Unauthenticated Error');
      err.statusCode = 401;
      next(error);
    }
  }
};
