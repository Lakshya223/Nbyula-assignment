const express =require("express");
const router = express.Router();
const User = require("../models/userModel"); 
// const Inventory   = require("../models/inventoryModel");

router.route("/register").post((req,res)=> {
    const name =req.body.name;
    const email = req.body.email;
    const pass= req.body.pass;
    const type = req.body.type;
    const newUser = new User({
        name,
        email,
        pass,
        type
    });
     newUser.save();


})
router.route("/findUser").get((req,res)=>{
   console.log(req.query)
    const query = {
        
        email : req.query.email
    }
    User.findOne(query).then((foundUser)=>{res.json(foundUser);
    console.log(foundUser)})
   
})



module.exports = router;
