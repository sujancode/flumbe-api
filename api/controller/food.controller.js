const Food=require("../model/food.model")
const mongoose=require("mongoose")

exports.getAllFoodItem=(req,res,next)=>{
    Food.find()
        .then(db_foods=>{
            res.status(200).json({
                foods:db_foods
            })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })
}

exports.postFoodItem=(req,res,next)=>{
    
    const _id=mongoose.Types.ObjectId()
    const food_name=req.body.food_name
    const category=req.body.category
    const price=req.body.price
    const description=req.body.description
    const photos=req.body.photos
    const ingredients=req.body.ingredients

    const food_item=new Food({_id:_id,food_name:food_name,category:category,price:price,description:description,photos:photos,ingredients:ingredients})

    food_item.save()
        .then(db_food=>{
            res.status(201).json({
                message:"Food Item Added",
                food_item:db_food
            })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })

}

exports.updateFoodItem=(req,res,next)=>{
    const id=req.params.id

    const updateOps={}

    for(const item in req.body){
        updateOps[item.propName]=item.value
    }

    Food.findByIdAndUpdate({_id:id},{$set:updateOps})
        .then(db_food=>{
            res.status(200).json({
                message:"Food Item Updated",
                food_item:db_food
            })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })
}
exports.getFoodItemById=(req,res,next)=>{
    const id=req.params.id
    Food.findById({_id:id})
        .then(db_food=>{
            if(db_food=null){
                const error=new Error("Food Not Found")
                next(error)
            }
            res.status(200).json({
                food:db_food
            })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })
}
exports.removeFoodItem=(req,res,next)=>{
    const id= req.params.id
    Food.findByIdAndRemove({_id:id})
        .then(db_food=>{
            res.status(200).json({
                message:"Food Item Deleted",
                food_item:db_food
            })
        })
        .catch(err=>{
            const error=new Error(err)
            next(error)
        })
}