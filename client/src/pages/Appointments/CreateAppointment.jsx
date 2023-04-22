import React, { useState } from "react"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"



function CreateAppointment(){
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [agenda,setAgenda]= useState('');
  const [guest,setGuest]= useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

   // check whether guest available
   // if guest not available send an alert 
   // if guest available send an appointment request
   // if appointment reuqest success then send alert that appointment is requested 
   // and navigate to my appointment/pending requests
    }
  
   
    return(
        <div className="CreateAppointment">
        <Navbar/>
       
      <h2> you can create an appointment- here</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
            <label htmlFor ="title">title</label>
            <input value = {title} onChange={(e)=>setTitle(e.target.value)} type  = "text" placeholder="title" id ="title" name="title" />
            <br/>
            <label htmlFor ="agenda">agenda</label>
            <input value = {agenda} onChange={(e)=>setAgenda(e.target.value)} type  = "text" placeholder= "agenda" id ="agenda" name="agenda" />
            <br/>
            <label htmlFor ="time">time</label>
            <input value = {time} onChange = {(e)=> setTime(e.target.value)} type = "text" placeholder="time" id ="time" name="time" />
            <br/>
            <label htmlFor ="guest">guests</label>
            <input value = {guest} onChange = {(e)=> setGuest(e.target.value)} type = "text" placeholder= "guest" id ="guest" name="guest" />
            <br/>
          
            <button type="submit">send appointment request </button>
        </form>
      </div>
    )
}

export default CreateAppointment
