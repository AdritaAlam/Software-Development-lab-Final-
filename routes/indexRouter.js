const express = require("express");
const router = express.Router();


router.get("/",(req,res) =>{
    res.sendFile("C:/Users/Adrita Alam/Desktop/Practice18/LastPractice/index.html")
});


module.exports = router;