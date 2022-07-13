const mongoose = require('../db/server')

const ChecklistSchema = new mongoose.Schema({
    age_range: String,
    criteria: String,
    criteria_met: String
})

const Checklist = mongoose.model('Checklist', ChecklistSchema)

module.exports = Checklist