module.exports = async (user_info, db) => {
  const {
    session: { email },
  } = req;

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
