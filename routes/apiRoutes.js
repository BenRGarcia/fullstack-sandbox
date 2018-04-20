// Require dependencies
const express = require('express')

const apiRouter = express.Router()

// For debugging
apiRouter.use((req, res, next) => {
  console.log(`${req.method} received at ${Date.now().toString()}`)
  next()
})

// Define METHODS for path /api
apiRouter.route('/')
  .get((req, res, next) => {
    res.send(`Server received your ${req.method} request`)
  })
  .post((req, res, next) => {
    res.send(`Server received your ${req.method} request, request body: ${req.body}`)
  })
  .put((req, res, next) => {
    res.send(`Server received your ${req.method} request, request body: ${req.body}`)
  })
  .delete((req, res, next) => {
    res.send(`Server received your ${req.method} request, request body: ${req.body}`)
  })

module.exports = apiRouter
