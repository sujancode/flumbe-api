const http=require("http")
const app=require("./app")

const mongoose=require("mongoose")


const PORT=process.env.PORT || 3000

const server=http.createServer(app)

mongoose.connect(`mongodb://localhost/flumbe`,
    {useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Database Connected")
    server.listen(PORT,()=>{
        console.log(`Server Running on ${PORT}`)
    })
})


