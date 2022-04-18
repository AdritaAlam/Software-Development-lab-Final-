const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    title: String,
    price: Number,
});

const Dishes = mongoose.model("Dishes",schema);
module.exports = Dishes;