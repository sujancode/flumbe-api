const Food = require("../model/food.model")
const NormalUser=require("../model/normalUser.model")
const History=require("../model/history.model")

const mongoose=require("mongoose")

exports.postHistory=(req,res,next)=>{
    const _id=mongoose.Types.ObjectId()
    const food=req.body.food_id
    const user=req.body.user_id
    const price=req.body.price
    const rating=req.body.rating
    const user_rating=req.body.user_rating

    const history=new History({_id:_id,food:food,user:user,price:price,rating:rating,user_rating:user_rating})

    history.save()
    .then(db_history=>{
        res.status(200).json({
            message:"History Added",
            history:db_history
        })
    })
    .catch(err=>{
        const error=new Error(err);
        next(error)
    })

}

exports.getAllHistory=(req,res,next)=>{

    History.find()
    .then(db_histories=>{
        res.status(200).json({
            db_history:db_histories
        })
    })
    .catch(err=>{
        const error=new Error(err)
        next(err)
    })
}

exports.getHistoryByUserId=(req,res,next)=>{
    
    const user_id=req.params.id

    History.find({user:user_id})
    .then(db_histories=>{
        res.status(200).json({
            db_history:db_histories
        })
    })
    .catch(err=>{
        const error=new Error(err)
        next(err)
    })

}

