const express = require("express");
const Router = express.Router();
const passport = require('passport');
const User = require("../../../schemas/UserModel");


Router.get("/",async function(req,res){
    res.render("TNP/tnpLoginPage");
  });
   
Router.post("/", async function(req,res){
    const user = new User({
        username: req.body.username,
        passowrd:req.body.password
    });
    req.login(user, function(err){
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