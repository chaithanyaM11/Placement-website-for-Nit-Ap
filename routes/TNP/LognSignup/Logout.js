const express = require("express");
const Router = express.Router();

Router.get("/",function(req,res){
    req.logout(function(err){
        if(!err){
            res.redirect("/login");
        }
    });
  });


module.exports = Router;