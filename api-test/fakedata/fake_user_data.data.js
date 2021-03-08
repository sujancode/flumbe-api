const faker = require("faker")
const mongoose=require("mongoose")
const csv=require('csv-parser')

const fs=require("fs")


function init(food_id){

    let users=[]
    let normal_users=[]
    let business_user=[]
    let business_id=[]
    let normal_id=[]



    for(let i =0;i<200;i++){
        const _id=mongoose.Types.ObjectId()
        const _normal_id=mongoose.Types.ObjectId()

        const user_name=faker.name.findName()
        const gender=faker.name.gender()
        const email=faker.internet.email()
        const account_type="NORMAL"
        const profile_photo=faker.image.imageUrl()
        const uid=makeid(16)
        const createdAt=new Date()
        const updatedAt=new Date()

        users.push({_id,email,account_type,uid,createdAt,updatedAt})
        normal_users.push({_id:_normal_id,uid,user_name,gender,profile_photo,createdAt,updatedAt})
        normal_id.push(_normal_id)

                
    }

    //Business User

    for(let i =0;i<20;i++){
        const _id=mongoose.Types.ObjectId()
        const _business_id=mongoose.Types.ObjectId()
        
        const email=faker.internet.email()
        const account_type="BUSINESS"
        const uid=makeid(16)

        const business_name= faker.name.firstName()+"Business"
        const logo=faker.image.business()
        const location={
            lat:faker.address.latitude(),
            lng:faker.address.longitude()
        }

        const start= Math.floor(Math.random()*food_id.length-1)
        const end= Math.floor(Math.random()*food_id.length-1)

        food_products=food_id.splice(start,end)
        
        const createdAt=new Date()
        const updatedAt=new Date()

        users.push({_id,email,account_type,uid,createdAt,updatedAt})
        business_user.push({_id:_business_id,business_name,logo,location,food_products,createdAt,updatedAt})
        business_id.push(_business_id)
                
    }


    //saving data
    fs.writeFile("./data/users.json",JSON.stringify(users),(err)=>{
        if(err){
            console.log("File not saved ")
        }else{
            console.log("user File Saved")
        }
    })

    fs.writeFile("./data/normal_user.json",JSON.stringify(normal_users),(err)=>{
        if(err){
            console.log("File not saved ")
        }else{
            console.log("normal user File Saved")
        }
    })

    fs.writeFile("./data/business_user.json",JSON.stringify(business_user),(err)=>{
        if(err){
            console.log("File not saved ")
        }else{
            console.log("business File Saved")
        }
    })

    fs.writeFile("./data/business_id.json",JSON.stringify(business_id),(err)=>{
        if(err){
            console.log("File not saved ")
        }else{
            console.log("business_id File Saved")
        }
    })

    fs.writeFile("./data/normal_id.json",JSON.stringify(normal_id),(err)=>{
        if(err){
            console.log("File not saved ")
        }else{
            console.log("normal_id File Saved")
        }
    })

}




function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

fs.readFile("./data/food_id.json",'utf8',(err,data)=>{
    if(!err){
        init(JSON.parse(data))
    }
})