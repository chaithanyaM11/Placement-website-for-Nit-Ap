const express = require("express");
const Router = express.Router();
const Contacts = require("../../schemas/MemberModel");


Router.get("/",async function(req,res){
    Contacts.find({},function(err,result){
        if(err){
            res.send(err);
        }
        else{
            res.render("contact",{Member: result})
        }
    });
});



module.exports = Router;