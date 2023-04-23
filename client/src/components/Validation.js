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
export const validateOff=(off)=>{
    let errors={}
    const timeRegex = /^\d{2}:\d{2} to \d{2}:\d{2}$/;
    if (!timeRegex.test(off)) {
      errors.format = 'Off time must be in the format "HH:MM to HH:MM"';
      return errors;
    }
  
    const [startTime, endTime] = off.split(' to ');
    const startHour = parseInt(startTime.split(':')[0]);
    const endHour = parseInt(endTime.split(':')[0]);
    const startMinute = parseInt(startTime.split(':')[1]);
    const endMinute = parseInt(endTime.split(':')[1]);
  
    
    if (startHour >= 24 || endHour >= 24) {
      errors.hours = 'Hours must be less than 24';
    }
  
    if (startMinute >= 60 || endMinute >= 60) {
      errors.minutes = 'Minutes must be less than 60';
    }
  
    if (startHour >= endHour) {
      errors.startHour = 'Start hour must be less than end hour';
      errors.endHour = 'End hour must be greater than start hour';
    }
  
    return errors;
}


export const validateCreateAppointment = (title,time,agenda,selectedGuest,user)=>{
    let errors={}
    if(!title){
        errors.title="enter title"
    }
    if(!agenda){
        errors.agenda= "enter agenda"
    }
    if(user===selectedGuest){
        errors.guest="you cannot set an appointment with yourself"
    }
    //time validation
    const timeRegex = /^\d{2}:\d{2} to \d{2}:\d{2}$/;
    if (!timeRegex.test(time)) {
        errors.format = 'Off time must be in the format "HH:MM to HH:MM"';
        return errors;
      }
      const [startTime, endTime] = time.split(' to ');
    const startHour = parseInt(startTime.split(':')[0]);
    const endHour = parseInt(endTime.split(':')[0]);
    const startMinute = parseInt(startTime.split(':')[1]);
    const endMinute = parseInt(endTime.split(':')[1]);

    if (startHour >= 24 || endHour >= 24) {
        errors.hours = 'Hours must be less than 24';
      }
    
      if (startMinute >= 60 || endMinute >= 60) {
        errors.minutes = 'Minutes must be less than 60';
      }
    
      if (startHour >= endHour) {
        errors.startHour = 'Start hour must be less than end hour';
        errors.endHour = 'End hour must be greater than start hour';
      }



    return errors
    
}