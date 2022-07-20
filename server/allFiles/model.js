const mongoose = require("mongoose")

const likeScema= mongoose.Schema({
user:{ 
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
}
}, {timestamps:true})

module.exports = mongoose.model("like", likeScema)