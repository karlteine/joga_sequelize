'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [
      { name: 'John Doe', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jane Smith', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};
