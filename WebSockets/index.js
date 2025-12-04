const express = require('express')
const path = require('path')


const app = express()

app.use(express.static(path.resolve('./public')))

app.get('/' , (req , res)=>{
    res.sendFile('./public/index.html')
})




app.listen(8005 , ()=>{
    console.log("Server Started")
})