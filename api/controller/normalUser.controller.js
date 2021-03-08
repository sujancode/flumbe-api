const NormalUser=require("../model/normalUser.model")
const User=require("../model/users.model")

const mongoose=require("mongoose")

exports.getAllNormalUser=(req,res,next)=>{
    NormalUser.find()
    .then(db_users=>{
        res.status(200).json({
            normal_users:db_users
        }) 
    }).catch(err=>{
        const error=new Error(err)
        next(error)
    })
}

exports.getNormalUserById=(req,res,next)=>{
    
    const id=req.params.id
    

    NormalUser.findById({_id:id}).then(db_user=>{
        if(db_user==null){
            const error=new Error("No User Found")
            next(error)
        }
        res.status(200).json({
            normal_user:db_user
        })
    }).catch(err=>{
        const error=new Error(err)
        next(error)
    })
}

exports.postNormalUser=(req,res,next)=>{
    const uid=req.body.uid
    User.findById({uid:uid})
    .then(db_user=>{
        if(db_user==null){
            const error=new Error("User Not Found")
            next(error)
        }

        const _id=mongoose.Types.ObjectId()
        const gender=req.body.gender
        const profile_photo=req.body.profile_photo
        const user_name=req.body.user_name

        const normal_users=new NormalUser({_id:_id,uid:uid,gender:gender,profile_photo:profile_photo,user_name:user_name})

        return normal_users.save()
    })
    .then(db_normal_user=>{
        res.status(201).json({
            message:"Normal User Created",
            normal_user:db_normal_user
        })
    })
    .catch(err=>{
        const error=new Error(err)
        next(error)
    })
}   

exports.updateNormalUser=(req,res,next)=>{
    const _id=req.params.id

    const updateOps={}
    for(const item in req.body){
        updateOps[item.propName]=item.value
    }
    NormalUser.findByIdAndUpdate({_id:_id},{$set:updateOps})
        .then(db_normal_user=>{
            res.status(200).json({
                message:"Normal User Updated",
                db_normal_user:db_normal_user
            })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })
}

exports.removeNormalUser=(req,res,next)=>{
    const _id=req.params.id

    NormalUser.findOneAndRemove({_id:_id})
    .then(db_normal_user=>{
        res.status(200).json({
            message:"User Deleted",
            db_normal_user:db_normal_user
        })
    })
    .catch(err=>{
        const error=new Error(err)
        next(error)
    })
}