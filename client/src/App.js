
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Login} from "./pages/Login";
import { Register } from "./pages/Register";
import Home from './pages/Home';
import Profile from './pages/Profile';


function App() {
  return (<>
   
    <div className="App">
   
      <BrowserRouter>
      
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Register" element={<Register/>}/>
        <Route exact path= "/Home" element= {<Home/>}/>
        <Route exact path='/Profile' element = {<Profile/>}/>
      </Routes>
      
      </BrowserRouter> 
      
    </div>
   
    </>
  );
}

export default App;
