const router = require('express').Router()
const User = require('../models/User')

router.post ('/create-user' ,async(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        _id:req.body.uid

    })

    const savedUser=await user.save()
    if(!savedUser){
        res.status(400).json({error:'user not saved'})
    }else{
        res.status(200).json({data:savedUser})
    }

})



module.exports=router