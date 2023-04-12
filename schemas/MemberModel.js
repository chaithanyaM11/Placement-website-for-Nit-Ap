const mongoose = require("mongoose");


const MemberSchema = new mongoose.Schema({
    Name: {type: String,required: true},
    Contact: {type:String, required: true},
    Mail_id: {type: String ,required: true},
    Department: {type: String,required: true},
    username: {type: String, required: true}
});


module.exports = mongoose.model("Member",MemberSchema);
