const router = require('express').Router();
const Product = require("../model/product");

router.post("/",async(req,res)=>{
    try {
        const product = await new Product(req.body);
        const saveBrand = await product.save();
        res.status(200).json(saveBrand);
    } catch (error) {
        res.status(500).json(error);        
    }
})


router.delete("/:id",async (req,res)=>{
    try {
        const brand = await Product.deleteMany({_id: req.params.id});
        res.status(200).json(brand);
    } catch (error) {
        res.status(500).json(error);
    }
})
module.exports = router;