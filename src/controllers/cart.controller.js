


router.get("/products/cart", async (req,res)=>{
    try{
        const cart = await Cart.find().lean().exec();
       return res.render("cart", {
            cart : cart
        });
        // res.send(cart).status(201)
    }
    catch(err){
        return res.send(err.message);
    }
})
router.get("/:id",async (req,res)=>{
    try{
        const cartdelete = await Cart.findByIdAndDelete(req.params.id);
        // console.log(cartdelete)
        // res.send(cartdelete)
        const cart = await Cart.find().lean().exec()
        return res.render("cart", {
            cart : cart
        });
    }
    catch(err){
        return res.send(err.message)
    }
})
module.exports = router