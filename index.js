PORT = process.env.PORT || 3000;
const express = require("express");
const morgan = require("morgan");


const app = express();
app.use(express.json());
app.use(morgan("tiny"));


const indexRouter = require("./routes/indexRouter");
const dishRouter = require("./routes/dishRouter");

app.use("/",indexRouter);
app.use("/dishes",dishRouter);



app.listen(PORT,() =>{
    console.log("LIstening to port: " + PORT);
})