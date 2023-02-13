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
    
    const eventId = eventRow.map(row => { return row.id })[0];
    const userName = userRow.map(row => { return row.UserName })[0];
    console.log(eventId);
    console.log(userName);

    // Must be an array
    const seedData = [{
        Year: 2023,
        EventId: eventId,
        User: userName,
        createdAt: new Date(),
        updatedAt: new Date()
    }];

    console.log(seedData);

    await queryInterface.bulkInsert("Entries", seedData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Entries", null, {});
  }
};
