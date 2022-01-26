module.exports = async (user_info, db) => {
  const getEncryptedPasswordInfo = require('./getEncryptedPasswordInfo');

  const { email, password, name, phone } = user_info;

  try {
    password_info = await getEncryptedPasswordInfo(password);
    await db.User.create({
      email,
      name,
      phone,
      ...password_info,
    });
  } catch (err) {
    // 이메일 중복
    if (err.name === 'SequelizeUniqueConstraintError') {
      err.statusCode = 409;
    }
    throw err;
  }
};
