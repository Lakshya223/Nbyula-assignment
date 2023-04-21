export const validateLogin = (email,pass ) => {
    let errors ={}
    if(!email){
        errors.name = "Email Required"
    }
    if(!pass){
        errors.pass = "Password Required"
    }
    return errors;
}
export const validateRegister = (name, email,pass,cPass) => {
    let errors ={}
    if(!email){
        errors.email = "Email Required"
    }
    if(!name){
        errors.name = "Name Required"
    }
    if(!pass){
        errors.pass = "Password Required"
    }
    if(!cPass){
        errors.cPass = "Confirm Password Required"
    }
    if(pass!==cPass)
    {
        errors.check= "password mismatch"
    }
   
    return errors;
}

