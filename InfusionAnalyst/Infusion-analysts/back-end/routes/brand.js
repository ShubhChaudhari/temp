const router = require('express').Router();
const Brand = require("../model/brand");

router.post("/",async(req,res)=>{
    try {
        const brand = await new Brand(req.body);
        const saveBrand = await brand.save();
        res.status(200).json(saveBrand);
    } catch (error) {
        res.status(500).json(error);        
    }
});


module.exports = router