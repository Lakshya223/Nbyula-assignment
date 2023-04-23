import {combineReducers} from "redux"

import userReducers from "./userReducers" 
import emailReducers from "./emailReducers"
import passReducers from "./passReducers"
import offReducers from "./offReducers"




const reducers=  combineReducers({
    user: userReducers,
    pass: passReducers,
    email : emailReducers,
    off: offReducers
   
})
export default reducers