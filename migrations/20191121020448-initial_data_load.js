'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', {uelize.INTEGER });
    */
    return queryInterface.bulkInsert('teams', [
      {
        "location": "Buffalo",
        "mascot": "Bills",
        "abbreviation": "BUF",
        "conference": "AFC",
        "division": "East"
      },
      {
        "location": "Miami",
        "mascot": "Dolphins",
        "abbreviation": "MIA",
        "conference": "AFC",
        "division": "East"
      },
      {
        "location": "New England",
        "mascot": "Patriots",
        "abbreviation": "NE",
        "conference": "AFC",
        "division": "East"
      },
      {
        "location": "New York",
        "mascot": "Jets",
        "abbreviation": "NYJ",
        "conference": "AFC",
        "division": "East"
      },
      {
        "location": "Baltimore",
        "mascot": "Ravens",
        "abbreviation": "BAL",
        "conference": "AFC",
        "division": "North"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.bulkDelete('teams', null, {})
    return queryInterface.bulkDelete('teams', null, {})
  }
};
