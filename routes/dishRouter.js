const express = require("express");
const router = express.Router();

dishes = ["Beef curry","Chicken curry","Achari chicken"];


router.get("/",(req,res) =>{
    res.send("All dishes are : " + dishes);
});
router.get("/:dishId",(req,res) =>{
    const index = req.params.dishId;
    res.send("dish is : " +  dishes[index]);
});
router.post("/",(req,res) =>{
    const new_dish = req.body.name;
    dishes.push(new_dish);
    res.send("Adding a dish : " + new_dish);
});
router.put("/:dishId",(req,res) =>{
    const index = req.params.dishId;
    dishes[index] = req.body.name;
    res.send("Updating dish at index :" + index);
});
router.delete("/",(req,res) =>{
    dishes = [] ;
    res.send("All dishes are deleted ");
});
router.delete("/:dishId",(req,res) =>{
    const index = req.params.dishId;
    dishes.splice(index,1);
    res.send("Deleting  a dish from index: " + index);
});

module.exports = router;