//jshint esversion:6

const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
    Name: {type: String,required: true},
    Mail: {type: String},
    Description: {type: String},
    PrevYearIntake: {type: [Number]},
    CurrentYearIntake: {type: Number},
    Type:{type: String,required: true}, 
    Branches: {type: [String],required: true},
    Roles: {type: [String]},
    CTCOffers: {type: String,required: true},
    HiringProcess:{type: String}
  });
  


module.exports = mongoose.model("Companies",CompanySchema);