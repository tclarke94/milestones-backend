
const mongoose = require('../db/server')

const BabySchema = new mongoose.Schema({
   
    name: String,
    birth_date: String,
    gender: String,
    photo_url: String,

})

const Baby = mongoose.model('Baby', BabySchema)

module.exports = Baby