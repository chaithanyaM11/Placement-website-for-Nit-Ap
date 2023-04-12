const express = require("express");
const Router = express.Router();
const passport = require('passport');
const Member = require("../../../schemas/TnpSchema");


Router.get("/",async function(req,res){
    res.render("TNP/tnpLoginPage");
});
   
Router.post('/',async function(req,res){
  const member = new Member({
    username: req.body.UserName,
    passowrd:req.body.Password
  });
  req.login(member, function(err){
    if(err){
        console.log(err);
        res.redirect("/login");
    }
    else{
        passport.authenticate("local")(req,res,function(){
            res.redirect("/TNPPage"); 
        });
    }
});
});





module.exports =  Router;