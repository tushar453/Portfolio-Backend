const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name:String,
    email:String,
    subject:String,
    message:String

});
module.exports = mongoose.model("Details",productSchema);