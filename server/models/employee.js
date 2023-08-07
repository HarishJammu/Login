const mongoose=require('mongoose')

const EmployeeSchema= {
    name:String,
    email:String,
    password:String
}
const EmployeeModelThrough=mongoose.model('employees',EmployeeSchema)

module.exports=EmployeeModelThrough