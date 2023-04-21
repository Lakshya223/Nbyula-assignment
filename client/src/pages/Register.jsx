import React,{useEffect,useState} from "react"
import axios from "axios"
import {validateRegister} from "../components/Validation";

import { useNavigate } from "react-router-dom";
export const Register =(props)=>{
     const [email, setEmail] = useState('');
    const [pass ,setPass] = useState('');
    const [name ,setName] = useState('');
    const [cPass ,setCPass] = useState('');
   
    const navigate = useNavigate();
    const [errors,setError] = useState({})
       const handleSubmit = (e) => {
        e.preventDefault();
    
        setError(validateRegister(name, email,pass,cPass ));

       
  
    }
    useEffect(()=>{
        if(Object.keys(errors).length ===0 && email!=="" && pass!=="" && name!=="" && cPass!=="" ){
        
        const newUser = {
            name : name,
            email: email,
            pass : pass,
           
        }
        axios.post('http://localhost:3001/register',newUser);
        alert("Registered Successful");
        navigate("/");
        }
    },[errors])
    return (
         <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor ="name">Name</label>
            <input value = {name} onChange={(e)=>setName(e.target.value)} type  = "text" placeholder="Name" id ="name" name="name" />
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            <label htmlFor ="email">email</label>
            <input value = {email} onChange={(e)=>setEmail(e.target.value)} type  = "email" placeholder="email@gmail.com" id ="email" name="email" />
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            <label htmlFor ="password">password</label>
            <input value = {pass} onChange = {(e)=> setPass(e.target.value)} type = "password" placeholder="******" id ="password" name="password" />
            {errors.pass && <p style={{color:"red"}}>{errors.pass}</p>}
            <label htmlFor ="confirmPassword">confirm password</label>
            <input value = {cPass} onChange = {(e)=> setCPass(e.target.value)} type = "password" placeholder="******" id ="cPassword" name="cPassword" />
           
           
            {errors.cPass && <p style={{color:"red"}}>{errors.cPass}</p>}
           
            {errors.check && <p style={{color:"red"}}>{errors.check}</p>}

           
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={()=>navigate("/")}>Already have an account? Log in here. </button>
        </div>
    )
}