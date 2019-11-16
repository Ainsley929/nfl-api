const express = require('express')
const teams = require('./teams.json')

const app = express()

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:id', (request, response) => {
    let abbreviationId
    let teamId
    abbreviationId = teams.filter((team) => {
        return team.abbreviation === (request.params.id.toUpperCase())
    })

    teamId = teams.filter((team) => {
        return team.id === parseInt(request.params.id)

    })
    if (!isNaN(request.params.id)) {
        response.send(teamId)
    } else {
        response.send(abbreviationId)
    }
})

const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server
