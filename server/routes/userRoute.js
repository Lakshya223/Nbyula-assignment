const express =require("express");
const router = express.Router();
const User = require("../models/userModel"); 
const userAppointments = require("../models/userAppointments");
const offhours = require("../models/offhours")

router.route("/register").post((req,res)=> {
    const name =req.body.name;
    console.log(name);
    const email = req.body.email;
    const pass= req.body.pass;
    const offHours = []
    const appointments = []
    const newUser = new User({
        name,
        email,
        pass,
        
    });
     newUser.save();
     const newOffHours = new offhours({
        name,offHours, 
     });
     newOffHours.save().then(res.status(200).send("registered")).catch(err=>{
        res.status(500).send('Internal server error');
        console.log(err);
     });


     const newUserAppointment = new userAppointments({
        name,appointments,
     })
      newUserAppointment.save().then(res.status(200).send("registered")).catch(err=>{
        res.status(500).send('Internal server error');
        console.log(err);
      })

})
router.route("/findUser").get((req,res)=>{
   console.log(req.query)
    const query = {
        
        email : req.query.email
    }
    User.findOne(query).then((foundUser)=>{res.json(foundUser);
    console.log(foundUser)})
   
})

router.route("/updatePassword").post((req,res)=>{
    console.log(req.body)
    const query = {
        email : req.body.email
    }
    const update = {
        pass : req.body.pass
    }
    User.findOneAndUpdate(query,update,{new:true}).then((foundUser)=>{res.json(foundUser)})
})

router.route("/updateUserName").post((req,res)=>{
    console.log(req.body)
    const query = {
        email : req.body.email
    }
    const update = {
        name : req.body.name
    }
    User.findOneAndUpdate(query,update,{new:true}).then((foundUser)=>{res.json(foundUser)})
})

router.route("/isGuestAvailable").get( async (req,res)=>{
    const { name, offHours, requestedTime } = req.query;
    if (!name || !offHours || !requestedTime) {
        return res.status(400).json({ message: 'Missing input parameters' });
      }
      const offTimeRanges = offHours.map((range) => {
        const [start, end] = range.split(' to ');
        return { start, end };
      });
      const [requestedStart, requestedEnd] = requestedTime.split(' to ');
    const isAvailable = offTimeRanges.every((range) => {
    const { start, end } = range;
    if (requestedStart < end && requestedEnd > start) {
      return false;
    }
    return true;
   
  });
  return res.json({ isAvailable });
})

router.route("/saveOffHoursToDB").post((req,res)=> {
    
    const name = req.body.name;
    const offHours = req.body.offHours;
    const query = {
        name : req.body.name
    }
    console.log(req.body)
    const update = {
        name : name,
        offHours : offHours
    }
    offhours.findOneAndUpdate(query,update,{new:true}).then((foundUser)=>{res.json(foundUser)})

})
router.get('/getallUsers', (req, res) => {
     User.find({})
  .then(users => {
    const names = users.map(user => user.name);
    res.send(names);
  })
  .catch(err => {
    console.error(err);
    res.status(500).send('Internal server error');
  });
  });

  router.get('/getOffHours',(req,res)=>{
    const name= req.body.name;
    offhours.find({name}).then(
   (found)=>{
    res.json(found.pop().offHours)
   }
    ).catch(err=>{
        console.log(err);
        res.status(500).send('Internal server error');
    })
  })


  router.route("/setAppointment").post((req,res)=>{
    const name = req.body.name;
    const appointments= req.body.appointments;
    const query = {
        name : name
    }
    const update={
        appointments:appointments
    }

    newUserAppointment.findOneAndUpdate(query,update,{new:true}).then((foundUser)=>{res.json(foundUser)})

})




module.exports = router;

