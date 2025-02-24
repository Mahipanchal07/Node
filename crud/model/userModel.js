const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const userModel = mongoose.model("user",schema);
module.exports=userModel