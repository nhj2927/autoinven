module.exports = async (email, password, db, session) => {
  const getEncryptedPasswordInfo = require('./signup/getEncryptedPasswordInfo');

  // 멤버 확인
  let type = 'user';
  let member = await db.User.findOne({
    where: {
      email,
      is_valid: 1,
    },
  });
  if (!member) {
    member = await db.Admin.findByPk(email);

    if (!member) {
      const error = new Error('No Corresponding Member');
      error.statusCode = 401;
      throw error;
    }

    type = 'admin';
  }

  // 비밀번호 확인
  const { password: encrypted_password } = await getEncryptedPasswordInfo(
    password,
    member.salt
  );
  if (encrypted_password !== member.password) {
    const error = new Error('Password Not Matched');
    error.statusCode = 401;
    throw error;
  }

  // 세션에 데이터 저장
  session.email = member.email;
  session.type = type;
  session.name = member.name;
  session.phone = member.phone;
};
