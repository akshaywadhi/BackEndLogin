const mongoose  = require('mongoose')


const userSchema = mongoose.Schema({
  name: String,
  email : String,
  number : Number,
  password: String,
})

const userModel = mongoose.model('logindata', userSchema)

module.exports = userModel