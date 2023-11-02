const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
//mongoose.connect("mongodb://127.0.0.1:27017/Mirador")
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Event:Event@cluster0.nzsyg10.mongodb.net/Mirador")

app.use("/",require("./router"))

app.listen(3000,function()
{
  console.log("express server in running on port 3000");
})
