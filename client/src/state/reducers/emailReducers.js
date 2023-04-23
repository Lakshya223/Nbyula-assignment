

const reducers = (state='',action )=>{
    if(action.type ==='set_email'){
        return action.payload;
    }
   
    else {
        return state;
    }
}
export default reducers