import React, { useState,useEffect } from 'react'
import Navbar from "../../components/Navbar"
import { validateChangePassword } from '../../components/Validation';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const[currPass,setCurrPass]= useState('');
    const[newPass,setNewPass]= useState('');
    const[cNewPass,setCNewPass]= useState('');
    const [errors,setError] = useState({});
    const pass = useSelector(state=> state.pass)
    const dispatch= useDispatch();
    const { setUser,setPass}=bindActionCreators(actionCreators,dispatch);
    const navigate = useNavigate();
     

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(pass);
      setError(validateChangePassword(pass,currPass,newPass,cNewPass ));
      
     //validate info 
    // if correct change password and send alert and navigate to profile page
}

useEffect(()=>{
        
  if(Object.keys(errors).length ===0 && currPass!=="" && pass!=="" && newPass!=="" && cNewPass!==""){
      //axios update
    setPass(newPass);
    if(pass===newPass)
      alert("password changed successfully")
      navigate("/Profile")
      
  }
},[errors])

  return (
    <div className="ChangePassword">
        <Navbar/>
      <h2>change password here </h2>
      <form className="change-password-form" onSubmit={handleSubmit}>
            <label htmlFor ="currPass">Current Password</label>
            <input value = {currPass} onChange={(e)=>setCurrPass(e.target.value)} type  = "password" placeholder="*****" id ="currPass" name="currPass" />
            <br/>
            {errors.currPassCheck && <p style={{color:"red"}}>{errors.currPassCheck}</p>}
            <label htmlFor ="newPass">Enter New Password</label>
            <input value = {newPass} onChange={(e)=>setNewPass(e.target.value)} type  = "password" placeholder="*****" id ="newPass" name="newPass" />
            <br/>
            <label htmlFor ="cNewPass">Confirm new password</label>
            <input value = {cNewPass} onChange = {(e)=> setCNewPass(e.target.value)} type = "password" placeholder="******" id ="cNewPass" name="cNewPass" />
            
            {errors.mismatch && <p style={{color:"red"}}>{errors.mismatch}</p>}

            <br/>
           
            <button type="submit">Change Password</button>
        </form>


    





      </div>
  )
}

export default ChangePassword








