module.exports = async (current_password, new_password, db) => {
  //임시 이메일 => 세션에서 가져와야됨
  const email = 'nhj2927@naver.com';
  const getEncryptedPasswordInfo = require('../auth/signup/getEncryptedPasswordInfo');

  // 유저 확인
  user = await db.User.findByPk(email);
  if (!user) {
    const error = new Error('No Corresponding User');
    error.statusCode = 401;
    throw error;
  }

  // 비밀번호 확인
  let { password: encrypted_password } = await getEncryptedPasswordInfo(
    current_password,
    user.salt
  );
  if (encrypted_password !== user.password) {
    const error = new Error('Password Not Matched');
    error.statusCode = 401;
    throw error;
  }

  // 새비밀번호 저장
  ({ password: encrypted_password } = await getEncryptedPasswordInfo(
    new_password,
    user.salt
  ));
  const result = await db.User.update(
    { password: encrypted_password },
    { where: { email } }
  );
  if (!result[0]) {
    throw new Error('Update Failed');
  }
};
