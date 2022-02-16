module.exports = (address1, address2) => {
  if (address2) {
    return `${address1} ${address2}`;
  } else {
    return address1;
  }
};
