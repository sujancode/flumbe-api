const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    _id:false,
    uid:{type:String,require:true},
    email:{type:String,require:true},
    account_type:{type:String,enum:["NORMAL","BUSINESS"],require:true}
},{timestamps:true})