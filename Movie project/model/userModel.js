const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    MovieImage:{
        type:String,
        require:true
    },
    MovieName:{
        type:String,
        require:true
    },
    MovieRate:{
        type:String,
        require:true
    },
    Actor:{
        type:String,
        require:true
    }
})

const userModel = mongoose.model("user",schema);

module.exports=userModel