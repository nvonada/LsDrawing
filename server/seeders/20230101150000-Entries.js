'use strict';
const { QueryTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const eventRow = await queryInterface.sequelize.query(
        "SELECT TOP 1 id FROM Events", { type: QueryTypes.SELECT }
      );
    
    const userRow = await queryInterface.sequelize.query(
        "SELECT TOP 1 UserName FROM Users", { type: QueryTypes.SELECT }
    );
    
    console.log(eventRow);
    console.log(userRow);
    const eventId = eventRow.map(row => { return row.id });
    const userName = userRow.map(row => { return row.UserName });

    const seedData = () => {
      return {
        Year: 2023,
        EventId: eventId,
        User: userName,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    };

    await queryInterface.bulkInsert("Entries", seedData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Entries", null, {});
  }
};
