const express=require("express")
const body_parser=require("body-parser")
const cors=require('cors')
const morgan=require("morgan")
const mongoose=require("mongoose")

//Routes
const userRoutes=require("./api/routes/user.route")

const app = express()

app.use(morgan("dev"))
app.use(body_parser.urlencoded({extended:false}))
app.use(body_parser.json())
app.use(cors())

mongoose.connect()

app.use("/user",userRoutes)

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