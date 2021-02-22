const express=require('express')
const Router=express.Router()
const userController=require("../controller/user.controller")

Router.get("/",userController.getAllUsers)
Router.post("/",userController.postUser)
Router.get("/:uid",userController.updateUser)
Router.patch("/:uid",userController.updateUser)
Router.delete("/:uid",userController.removeUser)

module.exports=Router