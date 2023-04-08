//jshint esversion:6

const mongoose = require("mongoose");

const TNPSchema = mongoose.Schema({
    Name: 
    {type: String,
    required: true
    },
    Mail_id:{type: String , required: true},
    contact:{type:String},
    Department: {type: String,required: true},
    UserName: {type: String, required: true},
    Password: {type: String, required: true}
  });

  module.exports = mongoose.model("TNPMember",TNPSchema);
