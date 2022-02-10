module.exports = (session) => {
  session.destroy((err) => {
    throw err;
  });
};
