const express = require ('express')
const Checklist = require('../models/checklistModels')

const router = express.Router()

router.get('/favicon.ico', (req,res) =>{
    console.log('favicon')
})

//display all checklist items

router.get('/', (req,res) => {
    Checklist.find({}).then((data)=>
    res.json(data)
    )
});

// Create a checklist item
router.post('/', (req,res)=> {
    console.log(req.body)
    Checklist.create(req.body).then(() => res.redirect('/'))  
    
})

// Update a checklist item
router.get('/:id', (req,res) => {
    Checklist.findById(req.params.id).then((data)=>
    res.json(data)
    )
});

router.put('/:id',  (req,res)=> {
    Checklist.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, checklist)=> {
    res.redirect('/') 
    })
     
})

// Delete a checklist item
router.delete('/:id', async (req, res)=>{
    res.json(await Checklist.findByIdAndRemove(req.params.id))
})

//Show route
router.get('/:id', (req,res) => {
    Checklist.findById(req.params.id).then((data)=>
    res.json(data)
    )
});

router.get('display/:id', (req,res) => {
    Checklist.findById(req.params.id).then((data)=>
    res.json(data)
    )
});
module.exports = router