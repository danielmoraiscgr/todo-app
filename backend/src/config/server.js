const port = 3003

const bodyParser = require('body-parser') // DEPRECATED
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

//server.use(express.urlencoded({ extended: true }))
//server.use(express.json())

server.listen(port, function() {
   console.log(`Backend is running on port ${port}.`)
})

module.exports = server
