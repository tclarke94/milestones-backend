const mongoose = require('../db/server')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,

})

const User = mongoose.model('User', UserSchema)

module.exports = User