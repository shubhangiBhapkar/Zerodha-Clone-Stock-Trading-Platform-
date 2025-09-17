const{Schema} =require("mongoose");

const HoldingdSchemsa = new Schema({
    name:String,
    qty: Number,
    avg: Number,
    price:Number,
    net: String,
    day: String
});
module.exports = {HoldingdSchemsa}