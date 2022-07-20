const { Router } = require('express');
const express = require ('express')
const Baby = require('../models/babyModels')

const router = express.Router()

router.get('/favicon.ico', (req,res) =>{
    console.log('favicon')
})

//display all babies

router.get('/', (req,res) => {
    Baby.find({}).then((data)=>
    res.json(data)
    )
});

// Create a baby
router.post('/', (req,res)=> {
    console.log(req.body)
    Baby.create(req.body).then(() => res.redirect('/baby'))  
    
})

// Update a baby 
router.get('/:id', (req,res) => {
    Baby.findById(req.params.id).then((data)=>
    res.json(data)
    )
});

router.put('/:id',  (req,res)=> {
    Baby.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, baby)=> {
    res.redirect('/baby') 
    })
     
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