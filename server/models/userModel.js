const mongoose = require("mongoose");
const userSchema = {
    name: String,
    email: String,
    pass : String,
    type: String
}
const User= mongoose.model("User", userSchema);
module.exports = User;
