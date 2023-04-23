

const reducers = (state='',action )=>{
    if(action.type ==='set_off'){
        return action.payload;
    }
   
    else {
        return state;
    }
}
export default reducers