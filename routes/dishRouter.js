const express = require("express");
const router = express.Router();

//dishes = ["Beef curry","Chicken curry","Achari chicken"];
const Dishes = require("../models/dishesSchema.js");

router.get("/",(req,res) =>{
    Dishes.find().then((dishesList) =>{
        res.send("All dishes are : " + dishesList);
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/Practice18/LastPractice/error.html");
    });
    
});
router.get("/:dishId",(req,res) =>{
    const index = req.params.dishId;
    Dishes.findById(index).then((dish) =>{
        res.send("dish is : " + dish);
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/Practice18/LastPractice/error.html");
    });
    
});
router.post("/",(req,res) =>{
    const new_dish = new Dishes(req.body);
    new_dish.save().then(() =>{
        res.send("Adding a dish : " + new_dish);
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/Practice18/LastPractice/error.html");
    });
    
});
router.put("/:dishId",(req,res) =>{
    const index = req.params.dishId;
    Dishes.findByIdAndUpdate(index,req.body).then((dish) =>{
        res.send("Updating dish at index :" + index);
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/Practice18/LastPractice/error.html");
    });
});
router.delete("/",(req,res) =>{
    Dishes.remove({}).then(() =>{
        res.send("All dishes are deleted ");
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/Practice18/LastPractice/error.html");
    });
    
});
router.delete("/:dishId",(req,res) =>{
    const index = req.params.dishId;
    Dishes.findByIdAndDelete(index).then(() =>{
        res.send("Deleting  a dish from index: " + index);
    }).catch((err) =>{
        res.sendFile("C:/Users/Adrita Alam/Desktop/Practice18/LastPractice/error.html");
    });
});

module.exports = router;