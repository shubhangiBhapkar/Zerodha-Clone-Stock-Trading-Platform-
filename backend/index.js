require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL || 3002;

app.listen(3002,()=>{
    console.log("app listening on port 3002");
    mongoose.connect(uri);
    console.log("DB connected");
});
