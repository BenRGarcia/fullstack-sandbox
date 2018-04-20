// Require dependencies
const express = require('express')

const apiRouter = express.Router()

// For debugging
apiRouter.use((req, res, next) => {
  console.log(`${req.method} received at ${Date.now().toString()}`)
})

// Define METHODS for path /api
apiRouter.route('/')
  .get((req, res, next) => {
    res.send(`Server received your ${req.method} request`)
  })
  .post((req, res, next) => {
    res.send(`Server received your ${req.method} request`)
  })
  .put((req, res, next) => {
    res.send(`Server received your ${req.method} request`)
  })
  .delete((req, res, next) => {
    res.send(`Server received your ${req.method} request`)
  })

module.exports = apiRouter
