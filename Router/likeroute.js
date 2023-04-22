const router = require('express').Router()
const likes = require('../models/like')
const {date} = require('../auth/auth')
router.get('/like',(req,res) => {
    likes.find((err,data) => {
        if(err) console.log(err)
        res.json(data)
    })
})

router.post('/like',(req,res) => {
    const liked =new likes({
        filter:req.body.filter,
        nameoflike:req.body.nameoflike,
        ppoflikes:req.body.ppoflikes,
        date:date,
        bio:req.body.bio,
        web:req.body.web,
        filt:req.body.filt
    })
    liked.save((err,data) => {
        if(err) console.log(err)
        res.json(data)
    })
})
router.put('/like/:id',(req,res) => {
    likes.findByIdAndUpdate({_id:req.params.id},req.body,{new:true},(err,data) => {
        if(err) console.log(err)
        res.json(data)
    })
})
router.delete('/like/:id',(req,res) => {
    likes.findOneAndDelete({filter:req.params.id},(err,data) => {
        if(err) console.log(err)
        res.json(data)
    })
})
module.exports = router