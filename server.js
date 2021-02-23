const http=require("http")
const app=require("./app")

const mongoose=require("mongoose")


const PORT=process.env.PORT || 3000

const server=http.createServer(app)

mongoose.connect(`mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASS}@flumbecluster.gzs3w.mongodb.net/flumbeDB?retryWrites=true&w=majority&ssl=true`,
    {useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Database Connected")
    server.listen(PORT,()=>{
        console.log(`Server Running on ${PORT}`)
    })
})


