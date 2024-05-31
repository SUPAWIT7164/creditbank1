// require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

// const Autenticate = require('./middleware/vertify_token')

// Cross Origin Resource Sharing
app.use(cors(corsOptions))
    // built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }))

// built-in middleware for json
app.use(express.json())

app.use('/image', express.static(__dirname + '/uploads'))

//router login and register
app.use('/reg', require('./route/registerRoute'))
app.use('/sub', require('./route/subjectRoute'))
app.use('/log', require('./route/loginRoute'))
app.use('/new', require('./route/newsRoute'))

// app.use(Autenticate)

module.exports = {
    path: '/api',
    handler: app
}