const express = require ('express')
const User = require('../models/userModels')

const router = express.Router()

//display all users

router.get('/', (req,res) => {
    User.find({}).then((data)=>
    res.json(data)
    )
});

module.exports = router