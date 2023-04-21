export const setUser = (user)=>{
    console.log("reached set User")
    return (dispatch)=>{ dispatch({
        type:'set_user',
        payload : user
    })
        
    }
}

export const setPass = (pass)=>{
    console.log("reached set pass")
    return (dispatch)=>{ dispatch({
        type:'set_pass',
        payload : pass
    })
        
    }
}