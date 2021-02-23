const express=require("express")
const { modelName } = require("../model/users.model")
const Router=express.Router()
const foodController=require("../controller/food.controller")

Router.get("/",foodController.getAllFoodItem)
Router.post("/",foodController.postFoodItem)
Router.patch("/:id",foodController.updateFoodItem)
Router.get("/:id",foodController.getFoodItemById)
Router.delete("/:id",foodController.removeFoodItem)

module.exports = Router