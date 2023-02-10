'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query(
      "SELECT TOP 1 id FROM Categories")
      .then(data => {
        const externalId = data[0];
        const seedData = externalId.map(row => {
          return {
            Year: 2023,
            CategoryId: row.id,
            Name: "CBJ vs. Nobody",
            EventDate: new Date("2023-03-23"),
            DrawingDate: new Date("2023-02-23"),
            NumberOfWinners: 2,
            UsesParkingPass: true,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });

        return queryInterface.bulkInsert("Events", seedData, {});
      });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Events", null, {});
  }
};
