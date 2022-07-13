const User = require('../models/userModels.js')

const seedData = require('./user-seeds.json')

// console.log(seedData)

// process.exit()

User.deleteMany({})
    .then(() => {
        return User.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() =>{
        process.exit()
    })