const Sequelize = require('sequelize')
const keys = require('./keys.js')

const sequelize = new Sequelize({
  dialect: keys.db.dialect,
  database: keys.db.name,
  username: keys.db.user,
  password: keys.db.password,
  port: keys.db.port
})

module.exports = sequelize
