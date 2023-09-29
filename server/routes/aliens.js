const express=require('express')
const router=express.Router()
const Alien=require('../model/alien')

router.get('/', async(req,res)=>{
    try{
        const a=await Alien.find();
        res.json(a)
    }
    catch(error){
        console.log(error)
    }
})

router.post('/',async(req,res)=>{
     const alien=new Alien(
       {
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub})

    try {
        const a1=await alien.save();
        res.json(a1)
    } catch (error) {
        console.log(error)
    }
}
)
module.exports=router