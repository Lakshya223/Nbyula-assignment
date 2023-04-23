import React, { useState ,useEffect} from "react"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"
import axios from "axios"
import { useSelector } from "react-redux";
import {validateCreateAppointment} from "../../components/Validation";





function CreateAppointment(){
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [agenda,setAgenda]= useState('');
  const [selectedGuest, setSelectedGuest] = useState('');
  const [ names, setNames]=useState([]);
  const [errors,setError] = useState({})
  const [off,setOff]=useState({});
  const user = useSelector(state=> state.user)
  const [avail,setAvail] = useState('');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateCreateAppointment(title,time,agenda,selectedGuest,user));
    axios.get("http://localhost:3001/getallUsers").then(function(response){
      setNames(response.data)
    })
    
    //get offhours of user
   // check whether guest available
   // if guest not available send an alert 
   // if guest available send an appointment request
   // if appointment reuqest success then send alert that appointment is requested 
   // and navigate to my appointment/pending requests
    }
    useEffect(()=>{
      if(Object.keys(errors).length ===0 && title!=="" && time!=="" && agenda!=="" && selectedGuest!=="" ){
      axios.get("http://localhost:3001/getOffHours",{params:{name:selectedGuest}}).then(function(response){
        setOff(response.data)
      })
      axios.get("http://localhost:3001/isGuestAvailable",{params:{
        name:selectedGuest,
        offHours : off,
        requestedTime: time
      }}).then(function(response){
        setAvail(response.data)
      })
      if(avail){
        const body ={
          name:user,
          appointments : [{
            title:title,
            agenda:agenda,
            time:time,
            guest:selectedGuest

          }]
        }
        axios.post("http://localhost:3001/setAppointment",body).then(function(response){
          alert("appointment success");
        }).catch(err=>{
          console.log(err)
        })
        
      }
      else{
        alert('guest not available')
      }
     
      }
  },[errors])
   
    return(
        <div className="CreateAppointment">
        <Navbar/>
       
      <h2> you can create an appointment- here</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
            <label htmlFor ="title">title</label>
            <input value = {title} onChange={(e)=>setTitle(e.target.value)} type  = "text" placeholder="title" id ="title" name="title" />
            {errors.title && <p style={{color:"red"}}>{errors.title}</p>}

            <br/>
            <label htmlFor ="agenda">agenda</label>
            <input value = {agenda} onChange={(e)=>setAgenda(e.target.value)} type  = "text" placeholder= "agenda" id ="agenda" name="agenda" />
            {errors.agenda && <p style={{color:"red"}}>{errors.agenda}</p>}


            <br/>
            <label htmlFor ="time">time</label>
            <input value = {time} onChange = {(e)=> setTime(e.target.value)} type = "text" placeholder="time" id ="time" name="time" />
            <br/>

            {errors.format && <p style={{color:"red"}}>{errors.format}</p>}
            {errors.hours && <p style={{color:"red"}}>{errors.hours}</p>}
            {errors.minutes && <p style={{color:"red"}}>{errors.minutes}</p>}
            {errors.startHour && <p style={{color:"red"}}>{errors.startHour}</p>}
            {errors.endHour && <p style={{color:"red"}}>{errors.endHour}</p>}


            <label htmlFor="guest-select">Select a guest:</label>
      <select id="guest-select" value={selectedGuest} onChange={(e)=>{setSelectedGuest(e.target.value);}}>
        <option value="">--Select a guest--</option>
        {names.map(name => (
          <option key={name} value={name}>{name}</option>
        ))}
      </select>
      {errors.guest && <p style={{color:"red"}}>{errors.guest}</p>}

           
           <br/>
          
            <button type="submit">send appointment request </button>
        </form>
      </div>
    )
}

export default CreateAppointment
