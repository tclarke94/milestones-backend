const express = require ('express')
const Baby = require('../models/babyModels')

const router = express.Router()

//display all babies

router.get('/baby', (req,res) => {
    Baby.find({}).then((data)=>
    res.json(data)
    )
});

// Create a baby
router.post('/', (req,res)=> {
    console.log(req.body)
    Baby.create(req.body).then(() => res.redirect('/'))  
    
})

// Update a baby 
router.put('/:id', async (req,res)=> {
    res.json(await Baby.findByIdAndUpdate(req.params.id, req.body))
     
})

// Delete a baby
router.delete('/:id', async (req, res)=>{
    res.json(await Baby.findByIdAndRemove(req.params.id))
})

//Show route
router.get('/:id', (req,res) => {
    Baby.findById(req.params.id).then((data)=>
    res.json(data)
    )
});

router.get('display/:id', (req,res) => {
    Baby.findById(req.params.id).then((data)=>
    res.json(data)
    )
});

module.exports = router