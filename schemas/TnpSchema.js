const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const TNPSchema = new mongoose.Schema({
    Name: {type: String,required: true},
    Contact: {type:String, required: true},
    Mail_id: {type: String ,required: true},
    Department: {type: String,required: true},
    username: {type: String, required: true},
    password: {type: String}
  });

  TNPSchema.plugin(passportLocalMongoose);

  module.exports = mongoose.model("Member",TNPSchema);
