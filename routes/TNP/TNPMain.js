const express = require("express");
const Router = express.Router();
const Member = require("../../schemas/MemberModel");


Router.get("/", async function(req,res){
    if(req.isAuthenticated()){
        Member.findOne({username: req.user.username},function(err,result){
            if(!err){
                res.render("TNP/tnpPage",{member: result});
            }
            else{
                res.send(err);
            }
        })
    }
    else{
        res.redirect("/login");
    }
});


Router.use("/addCompany",require("./Company/AddCompany"));
Router.use("/editCompany",require("./Company/EditCompany"));
Router.use("/addStory",require("./Story/AddStory"));


module.exports = Router;