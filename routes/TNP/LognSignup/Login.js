const express = require("express");
const flash = require('express-flash');
const Router = express.Router();
const Member = require("../../../schemas/TnpSchema");
const session = require('express-session');


Router.use(flash());

Router.get("/",async function(req,res){
    res.render("TNP/tnpLoginPage");
});
   
Router.post("/",async function(req,res,next){
    const uname = req.body.UserName;
    const pass = req.body.Password;
   
    Member.findOne({UserName: uname,Password: pass},function(err,member){
      if(err){
        return res.send(err);
      }
      if(!member){
        req.flash('error', 'Invalid email or password');
        return res.redirect('/tnpLogin');
      }
      return res.redirect("/TNPPage");
    });
});





module.exports =  Router;