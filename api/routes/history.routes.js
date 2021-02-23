const express=require("express")
const Router=express.Router()

const historyController=require("../controller/history.controller")

Router.get("/",historyController.getAllHistory)
Router.get("/:id",historyController.getHistoryByUserId)
Router.post("/",historyController.postHistory)
module.exports = Router
