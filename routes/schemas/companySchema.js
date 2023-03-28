//jshint esversion:6

const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({
    Name: {type: String},
    Mail: {type: String},
    Description: {type: String},
    PrevYearIntake: {type: [Number]},
    CurrentYearIntake: {type: Number},
    Type:{type: String}, 
    Branches: {type: [String]},
    Roles: {type: [String]},
    // Requirements:{type:[String]},
    CTCOffers: {type: [Number]},
    HiringProcess:{type: String},
    Locations: {type: String}
  });
  
module.exports = mongoose.model("Companies",CompanySchema);