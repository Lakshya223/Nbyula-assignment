import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"



function PendingRequests(){

   
    return(
        <div className="PendingRequests">
        <Navbar/>
       
      <h2> You have no  pending requests</h2>
      </div>
    )
}

export default PendingRequests
