const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const EmployeeModelThrough = require('./models/employee')
const app=express()

app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/userdetails')

app.post("/singup",(req,res)=>{
    EmployeeModelThrough.create(req.body)
    .then(employees=>res.json(employees))
    .catch (err=>{res.json(err)})
    
})


app.listen(3001,()=>{
    console.log("server running on 3001") 
})

