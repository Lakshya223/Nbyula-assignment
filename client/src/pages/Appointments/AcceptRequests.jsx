import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"



function AcceptRequests(){

   
    return(
        <div className="AcceptRequests">
        <Navbar/>
       
      <h2> You have no requests</h2>
      </div>
    )
}

export default AcceptRequests
