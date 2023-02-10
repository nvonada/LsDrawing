'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', 
     [
      {
       UserName: 'john.key',
       DeliveryEmail: "john.key@lakeshore.com",
       CanChangeUsers: false,
       CanChangeEvents: false,
       CanChangeWinners: false,
       NotAllowed: false, 
       IsDeliveryContact: false,
       createdAt: new Date(),
       updatedAt: new Date(),
       },
       {
        UserName: 'nathan.vonada',
        DeliveryEmail: "nathan.vonada@lakeshore.com",
        CanChangeUsers: true,
        CanChangeEvents: true,
        CanChangeWinners: true,
        NotAllowed: false, 
        IsDeliveryContact: true,
        createdAt: new Date(),
        updatedAt: new Date(),
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
