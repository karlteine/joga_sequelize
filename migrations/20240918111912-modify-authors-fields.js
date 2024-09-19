'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Authors', 'name', {
        type: Sequelize.STRING(255),
        allowNull: false
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Authors', 'name', {
        type: Sequelize.STRING,
        allowNull: false
      }),
    ]);
  }
};
