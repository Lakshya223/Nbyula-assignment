import React, { useEffect, useState } from "react"

import Navbar from "../../components/Navbar"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { Link } from "react-router-dom";
import {validateOff} from "../../components/Validation";
import axios from "axios"




function Profile(){
  const [showInput, setShowInput] = useState(false);
  const [offHours,setOffHours]= useState('');
  const [errors,setError] = useState({})

  const handleEditOffHoursClick = () => {
    setShowInput(!showInput)
    setError(validateOff(offHours));
   };
  const saveOffHoursToDB = (off)=>{
   const body={
      email:email,
      offHours : off

    }
    axios.post('http://localhost:3001/saveOffHoursToDB',body);
  }
  const user = useSelector(state=> state.user)
  const pass= useSelector(state=>state.pass)
  const off = useSelector(state=>state.off)
  const email = useSelector(state=>state.email)
  const dispatch= useDispatch();
  const { setUser,setPass,setOff}=bindActionCreators(actionCreators,dispatch);
  useEffect(()=>{
    if(Object.keys(errors).length ===0 && offHours!==""){

    setOff(offHours)
      saveOffHoursToDB(off);
  }
  },[errors])
   console.log(off);
    return(
        <div className="Home">
        <Navbar/>
        <h2> Welcome {user} !</h2>
        <Link to ="/Profile/ChangePassword">Change password</Link><br/>
      
      name : {user}<Link to = "/Profile/EditUsername">edit username</Link><br/>
      offhoures : {off}
      <button onClick={handleEditOffHoursClick}>{showInput ? 'Set Off Hours' : 'Edit Off Hours'}</button>
      
      {showInput && <input  onChange={(e)=>setOffHours(e.target.value)} type  = "text" placeholder="off-hours" id ="off" name="off" />
            }<br/>
            *Note that on editing the off hours your appointments will be cancelled and reset
            {errors.format && <p style={{color:"red"}}>{errors.format}</p>}
            {errors.startHour && <p style={{color:"red"}}>{errors.startHour}</p>}
            {errors.hours && <p style={{color:"red"}}>{errors.hours}</p>}
            {errors.minutes && <p style={{color:"red"}}>{errors.minutes}</p>}
      </div>
    )
}

export default Profile
