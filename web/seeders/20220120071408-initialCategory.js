'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name_ko: '일반',
        name_en: 'general',
      },
      {
        name_ko: '냉동',
        name_en: 'frozen',
      },
      {
        name_ko: '냉장',
        name_en: 'refrigeration',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
