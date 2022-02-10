const throwUnauthorizedError = (next) => {
  const error = new Error('Unauthorized Error');
  error.statusCode = 403;
  next(error);
};

const authorize = (req, next, type) => {
  // 웹 요청 인가
  if (req.session.role) {
    if (req.session.role === type) {
      next();
    } else {
      throwUnauthorizedError(next);
    }
  }

  // 앱 요청 인가
  else if (req.user) {
    if (req.user.role === type) {
      next();
    } else {
      throwUnauthorizedError(next);
    }
  }

  // 인가 실패
  else {
    throwUnauthorizedError(next);
  }
};

exports.authorizeAdmin = (req, res, next) => {
  authorize(req, next, 'admin');
};

exports.authorizeUser = (req, res, next) => {
  authorize(req, next, 'user');
};
