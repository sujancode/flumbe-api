const express=require("express")
const normalUserController=require("../controller/normalUser.controller")

const Router=express.Router()

Router.get("/",normalUserController.getAllNormalUser)

Router.post("/",normalUserController.postNormalUser)

Router.patch("/:id",normalUserController.updateNormalUser)

Router.get("/:id",normalUserController.getNormalUserById)

Router.delete("/:id",normalUserController.removeNormalUser)