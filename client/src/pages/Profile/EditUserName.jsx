import React, { useState,useEffect } from 'react'
import Navbar from "../../components/Navbar"
import { validateChangeUser } from '../../components/Validation';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const EditUserName = () => {
    const[currName,setCurrName]= useState('');
    const[newName,setNewName]= useState('');
    const[cNewName,setcNewName]= useState('');
    const [errors,setError] = useState({});
    const name = useSelector(state=> state.user)
    const dispatch= useDispatch();
    const { setUser,setPass}=bindActionCreators(actionCreators,dispatch);
    const navigate = useNavigate();
    const email = useSelector(state=> state.email);
     

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name);
      setError(validateChangeUser(name,currName,newName,cNewName ));
      
     //validate info 
    // if correct change password and send alert and navigate to profile page
}

useEffect(()=>{
        
  if(Object.keys(errors).length ===0 && currName!=="" && name!=="" && newName!=="" && cNewName!==""){
      //axios update

      const body = {
        email : email,
        name : newName
      }
      axios.post('http://localhost:3001/updateUserName',body).then( function(response){
        setUser(newName);
        if(name===newName){
          
          alert("username changed successfully")
      navigate("/Profile")}
        
        }
      );        
  }
},[errors])

  return (
    <div className="EditUserName">
        <Navbar/>
      <h2>change username here </h2>
      <form className="change-username-form" onSubmit={handleSubmit}>
            <label htmlFor ="currName">Current username</label>
            <input value = {currName} onChange={(e)=>setCurrName(e.target.value)} type  = "text" placeholder="current username" id ="currName" name="currName" />
            <br/>
            {errors.currNameCheck && <p style={{color:"red"}}>{errors.currNameCheck}</p>}
            <label htmlFor ="newName">Enter New username</label>
            <input value = {newName} onChange={(e)=>setNewName(e.target.value)} type  = "text" placeholder ="new user name"id ="newName" name="newName" />
            <br/>
            <label htmlFor ="cNewName">Confirm new username</label>
            <input value = {cNewName} onChange = {(e)=> setcNewName(e.target.value)} type = "text" placeholder="confirm new username" id ="cNewName" name="cNewName" />
            
            {errors.mismatch && <p style={{color:"red"}}>{errors.mismatch}</p>}

            <br/>
           
            <button type="submit">Change username</button>
        </form>

      </div>
  )
}

export default EditUserName








