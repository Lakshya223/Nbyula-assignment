import React, {useEffect, useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {validateLogin} from "../components/Validation";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";




export const Login =(props)=>{
    const navigate = useNavigate();
    
    const [email, setEmail1] = useState('');
    const [pass ,setPass1] = useState('');
    const [errors,setError] = useState({})
    const dispatch= useDispatch();
    const { setUser,setPass,setEmail}=bindActionCreators(actionCreators,dispatch);
     
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validateLogin(email,pass));
    }
    useEffect(()=>{
        
        if(Object.keys(errors).length ===0 && email!=="" && pass!==""){
            
           axios.get('http://localhost:3001/findUser',{
            params : { email: email}}).then(function (response) {
           const result = response.data;
         
           let err = {}
            if(!result){
                
                err.checkUser = "User not found";
                setError(err)
            }
            else if(result.pass !== pass){
                err.checkPass = "Password incorrect";
                setError(err)
            }
            else{
         //set user state respons.data.name
               
               
              setUser(response.data.name)
              setPass(pass);
              setEmail(email);
                navigate("/Home") ;
            }
            
          });
            
        }
    },[errors])
   
  
    return( 
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor ="email">email</label>
            <input value = {email} onChange={(e)=>setEmail1(e.target.value)} type  = "email" placeholder="email@gmail.com" id ="email" name="email" />
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            
            <label htmlFor ="password">password</label>
            <input value = {pass} onChange = {(e)=> setPass1(e.target.value)} type = "password" placeholder="******" id ="password" name="password" />
            {errors.pass && <p  style={{color:"red"}}>{errors.pass}</p>}
            {errors.checkUser && <p  style={{color:"red"}}>{errors.checkUser}</p>}
            {errors.checkPass && <p >{errors.checkPass}</p>}
            
            <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={()=>navigate("/Register")}>Don't have an account? Register here. </button>
        </div>
    )
}