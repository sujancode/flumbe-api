const mongoose=require("mongoose")

const foodItemSchema=mongoose.Schema({
    _id:{type:mongoose.Schema.Types.ObjectId,require:true},
    food_name:{type:String,require:true},
    category:{type:[String],require:true},
    price:{type:Number,require:true},
    description:{type:String,require:true},
    rating:{type:Number},
    photos:{type:[String]},
    ingredients:[
        {
            item_name:{type:String,require:true},
            quantity:{type:Number,require:true}
        }
        ]
},{timestamps:true})

module.exports = mongoose.model("food",foodItemSchema)
