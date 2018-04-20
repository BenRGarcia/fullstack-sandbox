const Users = require('./schema.js')

Users.create({
  username: 'test@seebenprogram.com',
  password: 'password' // should fail regex test
})
