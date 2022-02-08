'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ItemStates',
      [
        {
          name_ko: '입고 전',
          name_en: 'before in',
        },
        {
          name_ko: '입고',
          name_en: 'in',
        },
        {
          name_ko: '출고',
          name_en: 'out',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ItemStates', null, {});
  },
};
