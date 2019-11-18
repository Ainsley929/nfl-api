const bodyParser = require('body-parser')
const express = require('express')
const teams = require('./teams.json')

const app = express()

app.get('/teams/', (request, response) => {
    response.send(teams)
})
app.get('/teams/:input', (request, response) => {
    const matchingTeams = teams.filter((team) => {
        return team.id === parseInt(request.params.input) || team.abbreviation.toUpperCase() === request.params.input.toUpperCase()

    })


    if (matchingTeams.length) {
        response.send(matchingTeams)
    } else {
        response.sendStatus(404)
    }
})

app.use(bodyParser.json())

app.post('/teams', (request, response) => {
    const { id, location, mascot, abbreviation, conference, division } = request.body
    if (!id || !location || !mascot || !abbreviation || !conference || !division) {

        response.status(404).send('please provide information for all fields')
    }
    const newTeam = { id, location, mascot, abbreviation, conference, division }

    teams.push(newTeam)
    response.status(201).send(newTeam)
})


const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server
