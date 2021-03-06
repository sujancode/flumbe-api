const express=require("express")
const body_parser=require("body-parser")
const cors=require('cors')
const morgan=require("morgan")

//Routes
const userRoutes=require("./api/routes/user.routes")
const businessUserRoutes=require("./api/routes/businessUser.routes")
const foodRoutes=require("./api/routes/food.routes")
const historyRoutes=require("./api/routes/history.routes")
const normalUserRoutes=require("./api/routes/normalUser.routes")

const app = express()

app.use(morgan("dev"))
app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json())
app.use(cors())



app.use("/users",userRoutes)
app.use("/business-users",businessUserRoutes)
app.use("/foods",foodRoutes)
app.use("/history",historyRoutes)
app.use("/normal-users",normalUserRoutes)



app.use((req,res,next)=>{
    const error=new Error('Not Found')
    error.status=404
    next(error)
})

app.use((err,req,res,next)=>{
    res.status(err.status||500)
    res.json({
        message:err.message
    })
})

module.exports =app;