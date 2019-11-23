const bodyParser = require('body-parser')
const express = require('express')
const sequelize = require('sequelize')
const models = require('./models')
const Op = sequelize.Op

const app = express()

app.get('/teams', async (request, response) => {
    const teams = await models.Teams.findAll()
    response.send(teams)
})
app.get('/teams/:input', async (request, response) => {
    const matchingTeams = await models.Teams.findAll({
        where: {
            [Op.or]: [{ id: request.params.input }, { abbreviation: request.params.input }, { mascot: request.params.input },
            { conference: request.params.input }, { division: request.params.input }, { location: request.params.input }]
        }
    })

    if (matchingTeams.length) {
        response.send(matchingTeams)
    } else {
        response.sendStatus(404)
    }
})

app.use(bodyParser.json())

app.post('/teams', async (request, response) => {
    const { location, mascot, abbreviation, conference, division } = request.body
    if (!location || !mascot || !abbreviation || !conference || !division) {

        response.status(400).send('please provide information for all fields')
    }
    const newTeam = await models.Teams.create({ location, mascot, abbreviation, conference, division })


    response.status(201).send(newTeam)
})


const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server
