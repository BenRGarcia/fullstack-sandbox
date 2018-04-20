// Require dependencies
const express = require('express')
const path = require('path')
require('dotenv').config()

// Require routes
const apiRouter = require('./routes/apiRoutes.js')

// Instantiate express app
const app = express()

// Define server port
const PORT = process.env.PORT || 8080

// Mount middleware to parse request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Define path of static assets
app.use('/', express.static(path.join(__dirname, 'dist')))

// Define path of RESTful API
app.use('/api', apiRouter)

// Start server listening on port
app.listen(PORT, () => console.log(`Express server listening at PORT ${PORT}`))
