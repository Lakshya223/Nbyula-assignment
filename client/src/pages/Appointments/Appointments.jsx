import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"



function Appointments(){

   
    return(
        <div className="Appointments">
        <Navbar/>
        
      <h2> you have no appointments!</h2> 
        < Link to ="/Home/Appointments"> My appointments</Link><br/>
        <Link to ="/Home/Appointments/CreateAppointment "> create appointment</Link><br/>
        <Link to ="/Home/Appointments/AcceptRequests "> accept requests</Link><br/>
        <Link to ="/Home/Appointments/PendingRequests "> pending requests</Link>

      </div>
    )
}

export default Appointments
