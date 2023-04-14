const express = require("express");
const Router = express.Router();
const Member = require("../../../schemas/MemberModel");
const User = require("../../../schemas/UserModel");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");


Router.get("/",function(req,res){
    res.render("TNP/tnpSignup");
  });
  
Router.post("/",function(req,res){
  console.log(req.body.password);
    const newMember = new Member({
      Name: req.body.Name,
      Contact:req.body.Contact,
      Mail_id: req.body.Mail_id,
      Department: req.body.Department,
      Designation: req.body.Designation,
      username: req.body.UserName
    });
    newMember.save();
    User.register({username: req.body.UserName},req.body.password,function(err){
      if(err){
        console.log(err);
        res.redirect("/tnpSignup");
      }
      else{
        console.log("Saved succesfully");
        res.redirect("/login");
      }
    });
  });


  module.exports = Router;