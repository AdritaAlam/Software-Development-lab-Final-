PORT = process.env.PORT || 3000;
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
app.use(morgan("tiny"));


const indexRouter = require("./routes/indexRouter");
const dishRouter = require("./routes/dishRouter");

mongoose
.connect("mongodb://localhost:27017/LastTestcase",{UseNewUrlParser:true})
.then(() =>{
    console.log("Database connected successfully!");
    app.use("/",indexRouter);
    app.use("/dishes",dishRouter);
});

app.listen(PORT,() =>{
    console.log("LIstening to port: " + PORT);
})