

const reducers = (state='',action )=>{
    if(action.type ==='set_pass'){
        return action.payload;
    }
   
    else {
        return state;
    }
}
export default reducers