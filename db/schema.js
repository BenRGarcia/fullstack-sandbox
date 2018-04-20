// Require dependencies
const Sequelize = require('sequelize')
const sequelize = require('../config/connection.js')

/**
 *  Schema for database
 */

// Define table for 'users' username/password
const Users = sequelize.define('users', {
  // username = email address
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      unique: true,
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      strength: password => {
        // Is 8-64 chars, contains at least 1 lower, 1 upper, 1 num, 1 symbol: ! @ # $ %
        const isStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])(?=.{8,64})/g
        if (!isStrong.test(password)) {
          throw new Error(`Passwords must have at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol: ! @ # $ %`)
        }
      }
    }
  }
})

// For dev env, drop/create Users table
Users.sync({ force: true })
  .then(() => console.log(`'Users' table has been created`))
  .catch(err => console.log(`Houston we have a problem:\n`, err))

module.exports = Users
