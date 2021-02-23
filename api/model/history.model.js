const mongoose=require("mongoose")

const historySchema=mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,require:true},
    food:{type:mongoose.Schema.Types.ObjectId,ref:"food",require:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
    price:{type:Number,require:true},
    rating:{type:Number,require:true},
    users_rating:{type:Number,require:true}
},{timestamps:true})

module.exports = mongoose.model("history",historySchema)