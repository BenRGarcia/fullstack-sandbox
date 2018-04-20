const Sequelize = require('sequelize')
const keys = require('keys')

const sequelize = new Sequelize({
  dialect: keys.db.dialect,
  database: keys.db.name,
  username: keys.db.user,
  password: keys.db.password,
  port: keys.db.port
})

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err))

module.exports = sequelize
