const express = require("express");
const Router = express.Router();
const Member = require("../../../schemas/TnpSchema");


Router.get("/",function(req,res){
    res.render("TNP/tnpSignup");
  });
  
Router.post("/",function(req,res){
    const member = new Member({
      Name: req.body.Name,
      Mail_id: req.body.Mail_id,
      Department: req.body.Department,
      UserName: req.body.UserName,
      Password: req.body.Password
    });
    member.save();
    res.redirect("/tnpLogin")
  });


  module.exports = Router;