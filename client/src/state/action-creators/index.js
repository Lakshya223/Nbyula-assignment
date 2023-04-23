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

export const setEmail = (email)=>{
    console.log("reached set email")
    return(dispatch)=>{
        dispatch({
            type:'set_email',
            payload : email
        })
    }
}
export const setOff = (off)=>{
    console.log("reached set email")
    return(dispatch)=>{
        dispatch({
            type:'set_off',
            payload : off
        })
    }
}

