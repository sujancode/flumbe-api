const User=require("../model/users.model")
const BusinessUser=require("../model/businessUser.model")
const  mongoose = require("mongoose")

exports.getAllBusinessUsers=(req,res,next)=>{
    BusinessUser.find()
        .then(db_business_users=>{
            res.status(200).json({
                business_users:db_business_users
            })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })
}

exports.updateBusinessUserById=(req,res,next)=>{
    const id=req.params.id

    const updateOps={}

    for(const item in req.body){
        updateOps[item.propName]=item.value
    }

    BusinessUser.findByIdAndUpdate({_id:id})
        .then(db_business_user=>{
            res.status(200).json({
                message:"Business User Updated",
                business_user:db_business_users
            })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })
}

exports.postBusinessUser=(req,res,next)=>{
    const uid=req.body.uid
    User.findById({uid:uid})
        .then(db_user=>{
            if(db_user==null){
                const error=new Error("User Not Found")
                next(error)
            }
            const _id=mongoose.Types.ObjectId()
            const business_name=req.body.business_name
            const location=req.body.location
            const logo=req.body.logo
            
            const business_user=new BusinessUser({_id:id,business_user:business_user,location:location,logo:logo})
            
            business_user.save()
                .then(db_business_user=>{
                    res.status(201).json({
                        message:"Business User Created",
                        business_user:db_business_user
                    })
                })
                .catch(err=>{
                    const error=new Error(err)
                    next(error)
                })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })
}

exports.getBusinessUserById=(req,res,next)=>{
    const id=req.params.id

    BusinessUser.findById({_id:id})
        .then(db_business_user=>{
            if(db_business_user==null){
                const err=new Error("No User Found")
                next(err)
            }
            res.status(200).json({
                business_user:db_business_user
            })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })
}

exports.removeBusiness=(req,res,next)=>{
    const id=req.params.id

    BusinessUser.findByIdAndRemove({_id:id})
        .then(db_business_user=>{
            res.status(200).json({
                message:"User Deleted",
                business_user:db_business_user
            })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })


}

exports.addFoodItem=(req,res,next)=>{
    const id=req.body.id

    
}

exports.removeFoodItem=(req,res,next)=>{

}