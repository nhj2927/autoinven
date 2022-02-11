module.exports = async (user_info, db, session) => {
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

    // 세션에 데이터 저장
    session.email = email;
    session.role = 'user';
    session.name = member.name;
    session.phone = member.phone;
  } catch (err) {
    throw err;
  }
};
