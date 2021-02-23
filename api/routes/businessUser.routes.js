const express=require("express")
const Router=express.Router()
const businessController=require("../controller/businessUser.controller")

Router.get("/",businessController.getAllBusinessUsers)
Router.post("/",businessController.postBusinessUser)
Router.patch("/:id",businessController.updateBusinessUserById)
Router.get("/:id",businessController.getBusinessUserById)
Router.delete("/:id",businessController.removeBusiness)

Router.post("/add-food-item",businessController.addFoodItem)
Router.delete("/add-food-item",businessController.removeFoodItem)