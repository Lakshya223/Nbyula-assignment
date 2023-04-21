const express =  require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://lakshyapkhandelwal223:alohomora@cluster0.sgovayn.mongodb.net/nbyula")


app.use("/", require("./routes/userRoute"));


app.listen(3001,function(){
    console.log("server running on port 3001")
})