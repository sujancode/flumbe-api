const mongoose  = require("mongoose")
const User=require("../model/users.model")

exports.postUser=(req,res,next)=>{
    
    const uid=req.body.uid
    const user_name=req.body.user_name
    const email=req.body.email
    const account_type=req.body.account_type

    const user=new User({_id:mongoose.Types.ObjectId(),uid:uid,user_name:user_name,email:email,account_type:account_type})
    
    user
    .save()
    .then(db_user=>{
        res.status(201).json({
            message:"User Created",
            user:db_user
        })
    })

}

exports.getAllUsers=(req,res,next)=>{

    User
    .find()
    .then(db_users=>{
        res.status(200).json({
            users:db_users
        })
    })
    .catch(err=>{
        const error=new Error(err)
        next(error)
    })

}

exports.getUserById=(req,res,next)=>{
    const uid=req.params.uid
    User.findOne({uid:uid}).then(db_user=>{
        if(db_user==null){
            const err=new Error("User Not Found")
            next(err)
        }
        res.status(200).json({
            user:db_user
        })
    })
}

exports.updateUser=(req,res,next)=>{
    const uid=req.params.uid

    const updateOps={}

    for(const item in req.body){
        updateOps[item.propName]=item.value
    }

    User.findOneAndUpdate({uid:uid},{$set:updateOps})
        .then(db_user=>{
            res.status(200).json({
                message:`Update User ${uid}`,
                user:db_user
            })
        }).catch(err=>{
            const error=new Error(err)
            next(error)
        })

}

exports.removeUser=(req,res,next)=>{
    const uid=req.params.uid
    User.findOneAndRemove({uid:uid})
    .then(db_user=>{

    })
    .catch(err=>{
        const error=new Error(err)
        next(error)
    })
}

