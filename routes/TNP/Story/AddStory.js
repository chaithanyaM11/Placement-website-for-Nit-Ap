const express = require("express");
const Router = express.Router();
const Stories = require("../../../schemas/PlacementStoryModel");

Router.get("/", async function(req,res){
    if(req.isAuthenticated()){
        Stories.find({Active: false},function(err,result){
            if(err){
                res.send(err)
            }
            else{
                res.render("TNP/Story/AccessStory",{stories: result});
            }
        });
    }
    else{
        res.redirect("/login");
    }
});

Router.use(require("./AddorDelStory"));

module.exports = Router;