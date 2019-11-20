const teams = (connection, sequelize) => {
    return connection.define('teams', {
        id: { type: sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        location: { type: sequelize.STRING },
        mascot: { type: sequelize.STRING },
        abbreviation: { type: sequelize.STRING },
        conference: { type: sequelize.STRING },
        division: { type: sequelize.STRING },
    }, { paranoid: true })
}

module.exports = teams