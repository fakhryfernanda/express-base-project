'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.bulkInsert(
      'Users', 
      [
        {
          username: 'fakhry',
          email: 'fakhry@gmail.com',
          password: 'fakhry', 
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'doni',
          email: 'doni@gmail.com',
          password: 'doni', 
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
