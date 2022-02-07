'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'ContractStates',
      [
        {
          name_ko: '승인 대기 중',
          name_en: 'wating for approve',
        },
        {
          name_ko: '결제 대기 중',
          name_en: 'wating for payment',
        },
        {
          name_ko: '완료',
          name_en: 'completed',
        },
        {
          name_ko: '승인 거부',
          name_en: 'rejected',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ContractStates', null, {});
  },
};
