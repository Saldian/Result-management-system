 const mongoose = require('mongoose')
 const usershema = mongoose.Schema({
 firstName: {
     type: String,
     maxLenght: 25,
 },
 middleName: {
     type: String,
     maxLenght:25
 },
 lastName: {
     type: String,
     maxLenght:25
 },
 phone: {
     type: String,
     maxLenght:25
 },

 })

 const User = usershema.models('user', userschema)
 module.exports = User