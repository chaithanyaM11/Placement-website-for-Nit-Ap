const express = require("express");
const Router = express.Router();
const Member = require("../../../schemas/TnpSchema");
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
      username: req.body.UserName
    });
    Member.register(newMember,req.body.password,function(err){
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