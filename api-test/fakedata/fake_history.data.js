const fs=require("fs")
const mongoose=require("mongoose")

const faker=require("faker")
const { exit } = require("process")

fs.readFile("./data/food_id.json",'utf8',(err,food_data)=>{
    food_data=JSON.parse(food_data)
    if(!err){
        fs.readFile("./data/normal_id.json",'utf8',(err,user_data)=>{
            user_data=JSON.parse(user_data)
            const history=[]
            for(let i=0;i<10**5;i++){
                const _id=mongoose.Types.ObjectId()
                const user=user_data[Math.floor(Math.random()*user_data.length-1)]
                const food=food_data[Math.floor(Math.random()*food_data.length-1)]
                const price=Number(faker.commerce.price())
                const rating=Math.floor(Math.random()*5+1)
                const users_rating=Math.floor(Math.random()*5+1)
                const createdAt=new Date()
                const updatedAt=new Date()

                history.push({_id,user,food,price,rating,users_rating,createdAt,updatedAt})
                
            }

            fs.writeFile('./data/history_data.json',JSON.stringify(history),(err)=>{})
        })
    }
})