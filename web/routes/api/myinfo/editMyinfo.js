module.exports = async (user_info, db) => {
  //임시 이메일 => 세션에서 가져와야됨
  const email = 'nhj2927@naver.com';

  // 내정보 업데이트(이름, 휴대전화)
  const result = await db.User.update(user_info, {
    where: {
      email,
    },
  });
  if (!result[0]) {
    throw new Error('Update Failed');
  }
};
