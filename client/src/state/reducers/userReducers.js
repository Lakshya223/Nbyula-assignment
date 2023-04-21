

const reducers = (state='',action )=>{
    if(action.type ==='set_user'){
        return action.payload;
    }
   
    else {
        return state;
    }
}
export default reducers