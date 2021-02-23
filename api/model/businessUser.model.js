const mongoose=require("mongoose")

const businessUserSchema=mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,require:true},
    uid:{type:String,require:true},
    business_name:{type:String,require:true},
    location:{
        lat:{type:Number},
        lng:{type:Number}
    },
    logo:{
        type:String
    },
    food_products:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"food"
    }

},{timestamps:true})

module.exports = mongoose.model("BusinessUser",businessUserSchema)