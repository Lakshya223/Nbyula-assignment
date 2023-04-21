import {combineReducers} from "redux"

import userReducers from "./userReducers" 
import passReducers from "./passReducers"


const reducers=  combineReducers({
    user: userReducers,
    pass: passReducers
   
})
export default reducers