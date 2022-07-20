const mongoose = require("mongoose")

const userschema= mongoose.Schema({
name:{ 
    type:String
},

like:[{ 
    type:mongoose.Schema.Types.ObjectId,
    ref:"like"
}],
}, {timestamps:true})

module.exports = mongoose.model("users", userschema)