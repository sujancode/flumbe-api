const User=require("../model/users.model")

exports.postUser=(req,res,next)=>{
    
    const uid=req.body.uid
    const user_name=req.body.user_name
    const email=req.body.email
    const account_type=req.body.account_type

    const user=new User({uid:uid,user_name:user_name,email:email,account_type:account_type})
    
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
    
}

exports.updateUser=(req,res,next)=>{

}

exports.removeUser=(req,res,next)=>{

}

