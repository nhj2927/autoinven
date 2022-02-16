'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ExchangeRates',
      [
        {
          cur_unit: 'USD',
          deal_bas_r: '1198.5',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ExchangeRates', null, {});
  },
};
