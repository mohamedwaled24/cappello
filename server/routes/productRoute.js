const router = require('express').Router()
const Products=require('../models/Products')

router.get('/products',async(req,res)=>{
    try{
        const products=await Products.find({})
        res.status(200).json({products:products})
    }catch(err){
        console.log(err)
    }
})

router.get('/products-category/',async(req,res)=>{
    try {


        const products = await Products.aggregate([
            {$match:{}},
            {$group:{_id:'$category' , products:{$push:'$$ROOT'}
        }},
        {$project:{name:'$_id',products:2,_id:0}}
        ])
        res.status(200).json({products:products})
        
    } catch (error) {
        console.log(error)
    }
})


module.exports=router