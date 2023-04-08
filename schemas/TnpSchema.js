const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/placementDB");

const TNPSchema = mongoose.Schema({
    Name: {type: String,required: true},
    Mail_id: {type: String ,required: true},
    contact: {type:String},
    Department: {type: String,required: true},
    UserName: {type: String, required: true},
    Password: {type: String, required: true}
  });

  module.exports = mongoose.model("TNPMember",TNPSchema);
