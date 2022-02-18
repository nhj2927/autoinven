'use strict';

const crypto = require('crypto');

const buf1 = crypto.randomBytes(64);
const pass1 = crypto.pbkdf2Sync(
  process.env.ADMIN1_PW,
  buf1.toString('base64'),
  100000,
  64,
  'sha512'
);
const buf2 = crypto.randomBytes(64);
const pass2 = crypto.pbkdf2Sync(
  process.env.ADMIN2_PW,
  buf2.toString('base64'),
  100000,
  64,
  'sha512'
);

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Admins',
      [
        {
          email: process.env.ADMIN1_EMAIL,
          password: pass1.toString('base64'),
          salt: buf1.toString('base64'),
          phone: process.env.ADMIN1_PHONE,
          name: process.env.ADMIN1_NAME,
        },
        {
          email: process.env.ADMIN2_EMAIL,
          password: pass2.toString('base64'),
          salt: buf2.toString('base64'),
          phone: process.env.ADMIN2_PHONE,
          name: process.env.ADMIN2_NAME,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
