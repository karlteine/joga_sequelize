'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Tags', 'name', {
        type: Sequelize.STRING(255),
        allowNull: false
      }),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('Tags', 'name', {
        type: Sequelize.STRING,
        allowNull: true
      }),
    ]);
  }
};
