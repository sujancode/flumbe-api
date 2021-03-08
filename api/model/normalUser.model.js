const mongoose=require("mongoose")

const normalUserSchema=mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,require:true},
    uid:{type:String,require:true},
    user_name:{type:String,require:true},
    profile_photo:{type:String},
    gender:{type:String,enum:["MALE","FEMALE"]}
},{timestamps:true})

module.exports= mongoose.model("NormalUsers",normalUserSchema)