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

export const validateChangePassword = (pass,currPass, newPass, cNewPass)=>{
    let errors={}
    if(pass!==currPass)
    {
        errors.currPassCheck= "incorrect current password"
    }
   
    console.log(pass,currPass,cNewPass)

    if(newPass!==cNewPass)
    {
        errors.mismatch= "password mismatch"
    }
    return errors
    
}

export const validateChangeUser = (name,currName,newName,cNewName )=>{
    let errors={}
    if(name!==currName)
    {
        errors.currNameCheck= "incorrect current username"
    }
   
    console.log(name,currName,cNewName)

    if(newName!==cNewName)
    {
        errors.mismatch= " username mismatch"
    }
    return errors
    
}

