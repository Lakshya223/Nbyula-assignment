import React, { useState } from "react"

import Navbar from "../components/Navbar"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";




function Profile(){
  const [showInput, setShowInput] = useState(false);
  const [offHours,setOffHours]= useState('');

  const handleEditOffHoursClick = () => {
    setShowInput(!showInput)
    setPass(offHours)

  };
  const user = useSelector(state=> state.user)
  const pass= useSelector(state=>state.pass)
  const dispatch= useDispatch();
  const { setUser,setPass}=bindActionCreators(actionCreators,dispatch);
   
    return(
        <div className="Home">
        <Navbar/>
        <button>Change password</button>
      <h2> Welcome {user} !</h2>
      name : {user}<button>edit username</button><br/>
      offhoures : {pass}
      <button onClick={handleEditOffHoursClick}>{showInput ? 'Set Off Hours' : 'Edit Off Hours'}</button>
      {showInput && <input  onChange={(e)=>setOffHours(e.target.value)} type  = "text" placeholder="pass" id ="pass" name="pass" />
            }
      </div>
    )
}

export default Profile
