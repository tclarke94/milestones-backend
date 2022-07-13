const Baby = require('../models/babyModels.js')

const seedData = require('./baby-seeds.json')

// console.log(seedData)

// process.exit()

Baby.deleteMany({})
    .then(() => {
        return Baby.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() =>{
        process.exit()
    })