'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('accounts','jwtVersion',{
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      after: 'password'
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('accounts','jwtVersion')
  }
};
