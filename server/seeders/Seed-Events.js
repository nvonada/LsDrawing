'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //  await queryInterface.bulkInsert('Events', [{
    //     Year: 2023,
    //     CategoryId: 0,

    //  }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Events", null, {});
  }
};
