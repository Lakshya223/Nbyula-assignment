
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Login} from "./pages/Login";
import { Register } from "./pages/Register";
import Home from './pages/Home';
import Profile from './pages/Profile/Profile';
import Appointments from './pages/Appointments/Appointments';
import CreateAppointment from './pages/Appointments/CreateAppointment';
import AcceptRequests from './pages/Appointments/AcceptRequests';
import PendingRequests from './pages/Appointments/PendingRequests';
import ChangePassword from './pages/Profile/ChangePassword';
import EditUserName from './pages/Profile/EditUserName'

function App() {
  return (<>
   
    <div className="App">
   
      <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Register" element={<Register/>}/>
        <Route exact path= "/Home" element= {<Home/>}/>
        <Route exact path='/Profile' element = {<Profile/>}/>
        <Route exact path='/Home/Appointments' element = {<Appointments/>}/>
        <Route exact path='/Home/Appointments/CreateAppointment' element ={<CreateAppointment/>}/>
        <Route exact path='/Home/Appointments/AcceptRequests' element ={<AcceptRequests />}/>
        <Route exact path='/Home/Appointments/PendingRequests' element = {<PendingRequests />}/>
        <Route exact path = '/Profile/ChangePassword' element = {<ChangePassword/>}/>
        <Route exact path='/Profile/EditUsername' element= {<EditUserName/>}/>
      </Routes>
      
      </BrowserRouter> 
      
    </div>
   
    </>
  );
}

export default App;
