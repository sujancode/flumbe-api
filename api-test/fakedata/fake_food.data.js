const csv=require("csv-parser")
const faker=require("faker")
const fs=require('fs')
const { exit } = require("process")
const mongoose=require("mongoose")
const { fake } = require("faker")

const food=[]
const food_id=[]

fs.createReadStream('./RAW_recipes.csv')
    .pipe(csv())
    .on('data',(data)=>{
        const _id=mongoose.Types.ObjectId()
        const food_name=data.name
        const category=data.tags
        const ingredients=data.ingredients
        const description=data.description
        const photos=[faker.image.food(),faker.image.food()]
        const rating=Math.floor((Math.random() * 5) + 1)
        const price=Number(faker.commerce.price())
        const createdAt=new Date()
        const updatedAt=new Date()

        food.push({_id,food_name,category,ingredients,description,photos,rating,price,createdAt,updatedAt})
        food_id.push(_id)

    })
    .on('end',()=>{
        fs.appendFile("./data/food_data.json",JSON.stringify(food),(err)=>{})
        fs.appendFile("./data/food_id.json",JSON.stringify(food_id),(err)=>{})
    })