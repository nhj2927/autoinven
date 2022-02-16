'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name_ko: '일반창고',
        name_en: 'General Warehouse',
      },
      {
        name_ko: '항만창고',
        name_en: 'Port Warehouse',
      },
      {
        name_ko: '유해보관',
        name_en: 'Hazardous Storage',
      },
      {
        name_ko: '식품보관',
        name_en: 'Food Storage',
      },
      {
        name_ko: '축산물보관',
        name_en: 'LiveStock',
      },
      {
        name_ko: '수산물보관',
        name_en: 'Aquatic Product',
      },
      {
        name_ko: '기타',
        name_en: 'Other',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
