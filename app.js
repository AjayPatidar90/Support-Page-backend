const express = require("express")
const bodyparser = require("body-parser")
 const detail = require("./src/Router/Router")
// const adduser = require("./src/Controller/Controller")
const { default: mongoose } = require("mongoose")
const cors = require("cors")


mongoose.connect("mongodb+srv://ajaypatidar90989:ajay123@cluster0.lr0eb8u.mongodb.net/?retryWrites=true&w=majority").then((res)=>{
    console.log("db is connected")
}).catch((error)=>{
     console.log(error)
})

const app = express()
app.use(bodyparser.json())
app.use(cors())



// app.post("/adduser",adduser)
app.use("/",detail)

app.listen(4000,(error)=>{
    error?console.log(error):console.log("port is running")
})


