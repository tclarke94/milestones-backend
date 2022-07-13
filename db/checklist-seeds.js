const Checklist = require('../models/checklistModels.js')

const seedData = require('./checklist-seeds.json')

// console.log(seedData)

// process.exit()

Checklist.deleteMany({})
    .then(() => {
        return Checklist.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() =>{
        process.exit()
    })