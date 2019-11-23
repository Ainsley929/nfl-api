'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('teams', {
      id: {
        type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
      },
      location: { type: Sequelize.STRING },
      mascot: { type: Sequelize.STRING },
      abbreviation: { type: Sequelize.STRING },
      conference: { type: Sequelize.STRING },
      division: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })
    //return queryInterface.createTable('teams')
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.dropTable('teams', {
      id: {
        type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true,
      },
      location: { type: Sequelize.STRING },
      mascot: { type: Sequelize.STRING },
      abbreviation: { type: Sequelize.STRING },
      conference: { type: Sequelize.STRING },
      division: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'), },
      deletedAt: { type: Sequelize.DATE },
    })
    return queryInterface.dropTable('teams')
  }
};
