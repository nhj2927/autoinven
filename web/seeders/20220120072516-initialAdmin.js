'use strict';

const crypto = require('crypto');

const buf = crypto.randomBytes(64);
const pass = crypto.pbkdf2Sync(
  process.env.MAIL_PW,
  buf.toString('base64'),
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
          email: process.env.MAIL_ID,
          password: pass.toString('base64'),
          salt: buf.toString('base64'),
          phone: '16441393',
          name: 'Admin1',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
