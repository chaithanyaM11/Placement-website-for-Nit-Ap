//jshint esversion:6

const mongoose = require("mongoose");

const TNPSchema = mongoose.Schema({
    Name: {type: String},
    Mail_id:{type: String},
    contact:{type:String},
    Department: {type: String},
    UserName: {type: String},
    Password: {type: String}
  });

  module.exports = mongoose.model("TNPMember",TNPSchema);
