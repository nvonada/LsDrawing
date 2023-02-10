'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [{
      CategoryName: "CBJ Games",
      Disabled: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("Categories", null, {});
  }
};
