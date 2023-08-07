
import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"

import axios from "axios";

const Signup=()=>{
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [Password,setPassword]=useState()
 
let navigate=useNavigate()

 const  handleSubmit= (event)=>{
    const empDetails = JSON.stringify({ name: name , email: email , password: Password });
    const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    event.preventDefault()
    axios.post("http://localhost:3001/singup",empDetails, customConfig)
    .then(result=>console.log(result))
       

    .catch(err=>console.log(err)) 
 }
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">

<div className="bg-white p-3 rounded w-25">
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Name</strong>
            </label>
            <input type="text"
            placeholder="enter ur name"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Email</strong>
            </label>
            <input type="email"
            placeholder="enter ur name"
            autoComplete="off"
            name="email"
            className="form-control rou nded-0"
            onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Password</strong>
            </label>
            <input type="password"
            placeholder="enter ur name"
            autoComplete="off"
            name="password"
            className="form-control rounded-0"
            onChange={(e)=>setPassword(e.target.value)}/>
        </div>
       <button type="submit" className="btn btn-success w-100 rounded-0">
        Register
       </button>
       </form>
       <p>Already have an account</p>
       <Link to="/login" className="btn btn-default border w-100 bg-light rounde-0 text-decoration-none">Login</Link>
</div>  
        </div>
    )
}
export default Signup
